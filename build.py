#!/usr/bin/env python3

from optparse import OptionParser
from os import system

def parse_command_line_arguments():
    parser = OptionParser()
    parser.add_option("-i", "--install", action="store_true", dest="install", default=False, help="Run npm install to download dependencies of the project.")
    parser.add_option("-d", "--run_development", action="store_true", dest="run_development", default=False, help="Run dotnet watch run to build/run a hot reloading development version")
    parser.add_option("-b", "--build", action="store_true", dest="build", default=False, help="Run dotnet build to build production Docker Container")
    parser.add_option("-p", "--run-production", action="store_true", dest="run_production", default=False, help="Run Production Docker Container")
    return parser.parse_args()

def dockerBuild():
    system("docker build . -t wahinekai/memberdatabase/frontend")

def dockerRunProduction():
    system("docker run --rm -it -p 80:80 wahinekai/memberdatabase/frontend")

def npmInstall():
    system("npm install")

def npmStart():
    system("npm start")

def main():
    (options, _args) = parse_command_line_arguments()

    if options.install:
        npmInstall()

    if options.build:
        dockerBuild()

    if options.run_development:
        npmStart()

    if options.run_production:
        dockerRunProduction()

if __name__ == "__main__":
    main()