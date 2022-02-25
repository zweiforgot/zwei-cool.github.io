#########################
##   StartUp Options   ##
#########################

skipModuleInstall = True      # If "True", this skips the module install (see the required modules section)                                        | Recommended Option: False
hideLoadingBars = True        # If "True", this will hide all loading bars, with the exception of downloads.                                       | Recommended Option: False
enableDebugFeatures = False    # If "True", this prints some debugging info, as well as enables some test features. This usually has no effect.     | Recommended Option: False

################
##   Signal   ##
################

def main():

    #################
    ##   Imports   ##
    #################

    import os

    def cls():
        os.system('cls' if os.name == 'nt' else 'clear')

    cls()

    print('Importing Modules. This may take some time.')

    #######  Required Modules

    import subprocess
    import sys

    if skipModuleInstall == False:
        if enableDebugFeatures:
            print(' ')
            print('Installing Prompt ToolKit')
            subprocess.check_call(
                [sys.executable, '-m', 'pip', 'install', 'prompt_toolkit'])

            print(' ')
            print('Installing WGet')
            subprocess.check_call(
                [sys.executable, '-m', 'pip', 'install', 'wget'])

            print(' ')
            print('Installing TermColor')
            subprocess.check_call(
                [sys.executable, '-m', 'pip', 'install', 'termcolor'])

            print(' ')
            print('Updating PiP')
            subprocess.check_call(
                [sys.executable, '-m', 'pip', 'install', '--upgrade', 'pip'])
                
            print(' ')
            print('Installing Progress')
            subprocess.check_call(
                [sys.executable, '-m', 'pip', 'install', 'progress'])

            cls()
        else:
            subprocess.check_call(
                [sys.executable, '-m', 'pip', 'install', 'prompt_toolkit'])

            subprocess.check_call(
                [sys.executable, '-m', 'pip', 'install', 'wget'])

            subprocess.check_call(
                [sys.executable, '-m', 'pip', 'install', 'termcolor'])

            subprocess.check_call(
                [sys.executable, '-m', 'pip', 'install', '--upgrade', 'pip'])
                
            subprocess.check_call(
                [sys.executable, '-m', 'pip', 'install', 'progress'])

            cls()

    ####### Other Modules

    import prompt_toolkit
    from prompt_toolkit import prompt
    import webbrowser
    import wget
    import getpass
    import zipfile
    from zipfile import BadZipFile
    import platform
    from os.path import exists
    import termcolor
    from termcolor import colored
    from time import sleep
    from progress.bar import Bar

    ####### Loading Bar

    print(colored('INITIALIZING:', 'yellow'), colored('SPARKPLUG: PY', 'magenta'))

    if hideLoadingBars == False:
        with Bar('Loading', fill='█', suffix='%(percent).1f%% - %(eta)ds') as bar:
                for i in range(100):
                    sleep(0.01)
                    bar.next()

    cls()

    ###################
    ##   Functions   ##
    ###################

    def website():
        if hideLoadingBars == False:
            with Bar('Loading', fill='█', suffix='%(percent).1f%% - %(eta)ds') as bar:
                for i in range(100):
                    sleep(0.001)
                    bar.next()
        if enableDebugFeatures == True:
            print(colored('DEBUG: Opening Website:', 'grey'), colored('https://zwei-cool.github.io/','cyan'))
        webbrowser.open('https://zwei-cool.github.io/')

    def smb():
        url = 'https://github.com/zwei-cool/zwei-cool.github.io/releases/download/SMB/SuperMarioBros.zip'
        path = '/Users/' + getpass.getuser() + '/Downloads/SuperMarioBros.zip'
        path2 = '/Users/' + getpass.getuser() + '/Downloads/'
        wget.download(url, path)
        with zipfile.ZipFile(path, 'r') as zip_ref:
            zip_ref.extractall(path2)
        os.remove(path)
        print(" ")
        print(colored("Done! Check your", 'yellow'), colored('DOWNLOADS', 'red'), colored('folder.', 'yellow'))
        currentplatform = platform.system()
        if currentplatform == 'Windows':
            os.system("pause")
        else:
            os.system('read -s -n 1 -p "Press any key to continue..."')
            print()
        cls()
        Openingprompt()

    def twentyfortyeight():
        url = 'https://github.com/zwei-cool/zwei-cool.github.io/releases/download/2048/2048.zip'
        path = '/Users/' + getpass.getuser() + '/Downloads/2048.zip'
        path1 = '/Users/' + getpass.getuser() + '/Downloads/2048 (1).zip'
        path2 = '/Users/' + getpass.getuser() + '/Downloads/'
        path3 = '/Users/' + getpass.getuser() + '/Downloads/2048/2048Portable.exe'
        wget.download(url, path)
        if os.path.exists(path1):
            with zipfile.ZipFile(path1, 'r') as zip_ref:
                zip_ref.extractall(path2)
            os.remove(path1)
        else:
            with zipfile.ZipFile(path, 'r') as zip_ref:
                zip_ref.extractall(path2)
            os.remove(path)
        print(" ")
        print(colored("Done! Check your", 'yellow'), colored('DOWNLOADS', 'red'), colored('folder.', 'yellow'))
        os.system(path3)
        currentplatform = platform.system()
        if currentplatform == 'Windows':
            os.system("pause")
        else:
            os.system('read -s -n 1 -p "Press any key to continue..."')
            print()
        cls()
        Openingprompt()

    def info():
        cls()
        print(colored('                                                          SPARKPLUG', 'magenta'))
        print(colored('                                                  Sparkplug', 'magenta'),  colored('|', 'grey'), colored('by zwei#0001', 'green'))
        print(colored('                                                  Py', 'blue'), colored('Script', 'yellow'),  colored('|', 'grey'), colored('by M4X4#6494', 'green'))
        print(colored('We at Sparklug do not own any games that are shown in this script. All rights of said games go to the developers, not us.', 'red'))
        currentplatform = platform.system()
        if currentplatform == 'Windows':
            os.system("pause")
        else:
            os.system('read -s -n 1 -p "Press any key to continue..."')
            print()
        cls()
        Openingprompt()

    def games():
        cls()
        print(colored('Welcome to Sparkplug Python, A python script for students to','yellow'), colored('"pass the border"', 'red'), colored('that allows you to play online games that are usually restricted.', 'yellow'))
        print(colored("---------------------------", 'cyan'))
        print(colored('Sparkplug', 'magenta'),  colored('|', 'grey'), colored('by zwei#0001', 'green'))
        print(colored('Py', 'blue'), colored('Script', 'yellow'),  colored('|', 'grey'), colored('by M4X4#6494', 'green'))
        print(colored("---------------------------", 'cyan'))
        print(colored("Don't know where to get started?", 'blue'))
        print(colored("Choose something from the list below. These are all games that the creator has picked for new players.", 'blue'))
        print(colored("----------------------------------------------------------------------------------------------------", 'cyan'))
        print(colored("     1", 'cyan'), ("    >>     Download | Super Mario Bros.        "))
        print(colored("     2", 'cyan'), ("    >>     Download | 2048                     "))
        print(colored("     0", "cyan"), ("    >>     Back                                "))
        print(colored("----------------------------------------------------------------------------------------------------", 'cyan'))
        while True:
            text = prompt('Option # >> ')

            ########################
            ##   Call Functions   ##
            ########################

            if text == "1":
                smb()
            elif text == "2":
                twentyfortyeight()
            elif text == "0":
                cls()
                Openingprompt()
            elif text == "cls":
                cls()
                Openingprompt()
            else:
                print(colored('Syntax Error: Unknown Option "', 'red'), colored(text, 'cyan'), colored('"', 'red'))

    ################
    ##   Prompt   ##
    ################
    def Openingprompt():
        print(colored('Welcome to Sparkplug Python, A python script for students to','yellow'), colored('"pass the border"', 'red'), colored('that allows you to play online games that are usually restricted.', 'yellow'))
        print(colored("---------------------------", 'cyan'))
        print(colored('Sparkplug', 'magenta'),  colored('|', 'grey'), colored('by zwei#0001', 'green'))
        print(colored('Py', 'blue'), colored('Script', 'yellow'),  colored('|', 'grey'), colored('by M4X4#6494', 'green'))
        print(colored("---------------------------", 'cyan'))
        print(colored("Don't know where to get started?", 'blue'))
        print(colored("Choose something from the list below.", 'blue'))
        print(colored("----------------------------------------------------------------------------------------------------", 'cyan'))
        print(colored("     1", 'cyan'), ("    >>     Open Website                        "))
        print(colored("     2", 'cyan'), ("    >>     Games List                          "))
        print(colored("     3", "cyan"), ("    >>     Credits / Info                      "))
        if enableDebugFeatures:
            print(colored("     0", 'cyan'), ("    >>     Debug                               "))
        print(colored("----------------------------------------------------------------------------------------------------", 'cyan'))
        while True:
            text = prompt('Option # >> ')

            ########################
            ##   Call Functions   ##
            ########################

            if text == "1":
                website()
            elif text == "2":
                games()
            elif text == "3":
                info()
            elif text == "cls":
                cls()
                Openingprompt()
            elif enableDebugFeatures == True:
                if text == "0":
                    print(colored('Debugging commands have not been set up as of now, come back later.', 'cyan'))
            else:
                print(colored('Syntax Error: Unknown Option "','red'), colored(text,'cyan'), colored('"', 'red'))

    #############
    ##  Main   ##
    #############

    Openingprompt()

######################
##   Script Check   ##
######################

if __name__ == '__main__':
    main()

else:
    print("Please do not import this script and just run it instead.")
    print("Script Imported: spp.py")
