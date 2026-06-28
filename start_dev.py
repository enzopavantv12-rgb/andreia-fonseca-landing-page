import subprocess
import sys
import os
import time

def main():
    print("Starting development environment...")
    
    # 1. Start Tailwind CSS CLI watcher
    # In Windows, we need shell=True to execute npx successfully
    is_windows = os.name == 'nt'
    
    print("Starting Tailwind CLI watcher...")
    tailwind_proc = subprocess.Popen(
        "npx @tailwindcss/cli -i src/index.css -o style.css --watch",
        shell=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True
    )
    
    # 2. Start Vite Dev Server
    print("Starting Vite Dev Server...")
    vite_proc = subprocess.Popen(
        "npx vite --port=3000 --host=0.0.0.0",
        shell=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True
    )
    
    # Simple loop to print outputs of both processes
    try:
        while True:
            # We can just sleep and let them run in background
            time.sleep(1)
            
            # Check if any process has died
            if tailwind_proc.poll() is not None:
                print(f"Tailwind watcher exited with code {tailwind_proc.returncode}")
                break
            if vite_proc.poll() is not None:
                print(f"Vite dev server exited with code {vite_proc.returncode}")
                break
                
    except KeyboardInterrupt:
        print("\nStopping dev environment...")
    finally:
        tailwind_proc.terminate()
        vite_proc.terminate()
        print("Dev servers stopped.")

if __name__ == "__main__":
    main()
