#!/usr/bin/env python3

from optparse import OptionParser
from os import system

def parse_command_line_arguments():
    parser = OptionParser()
    parser.add_option("-i", "--install", action="store_true", dest="install", default=False, help="Run npm install to download dependencies of the project.")
    parser.add_option("-d", "--run_development", action="store_true", dest="run_development", default=False, help="Run dotnet watch run to build/run a hot reloading development version")
    return parser.parse_args()

def npmInstall():
    system("npm install")

def npmStart():
    system("npm start")

def main():
    (options, _args) = parse_command_line_arguments()

    if options.install:
        npmInstall()

    if options.run_development:
        npmStart()

if __name__ == "__main__":
    main()