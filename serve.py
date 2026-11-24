#!/usr/bin/env python3
"""
Local HTTP Server for Tejashwini's Portfolio Website
Serves the portfolio at http://localhost:3000 with proper MIME types for PDFs, SVGs, and JS.
"""
import http.server
import socketserver
import os
import sys
import webbrowser

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and disable aggressive caching for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def guess_type(self, path):
        # Ensure proper MIME types for SVG and PDF
        if path.endswith('.svg'):
            return 'image/svg+xml'
        if path.endswith('.pdf'):
            return 'application/pdf'
        if path.endswith('.js') or path.endswith('.jsx'):
            return 'application/javascript'
        return super().guess_type(path)

def run():
    os.chdir(DIRECTORY)
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("=" * 60)
        print(f"Tejashwini Suresh Sonnad - Personal Portfolio Website")
        print(f"Serving at: http://localhost:{PORT}")
        print(f"Project directory: {DIRECTORY}")
        print("Press Ctrl+C to stop the server.")
        print("=" * 60)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")

if __name__ == "__main__":
    run()
