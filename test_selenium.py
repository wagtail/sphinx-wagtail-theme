from http import server
import pathlib
import threading

from selenium import webdriver


BASE_DIR = pathlib.Path(__file__).parent.resolve()
DOCS_BUILD_DIR = BASE_DIR / "docs/_build/html/"


def main():
    if not DOCS_BUILD_DIR.exists():
        print(
            "No docs build directory found. "
            "Did you forget to build the development docs?"
        )
        exit(1)


    handler_class=server.BaseHTTPRequestHandler
    server_address = ('', 8000)

    httpd = server.HTTPServer(server_address, handler_class)

    server_thread = threading.Thread(target=httpd.serve_forever)
    server_deamon = True
    server_thread.start()

    print("Hello")

    httpd.shutdown()



# driver = webdriver.Firefox()

# driver.get("http://localhost:8000")

# driver.quit()

if __name__ == "__main__":
    main()
