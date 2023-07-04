# Command Line Documentation

The _command line interface_ (CLI) is a text-based application that lets you control a computer operating system, run programs, navigate files and directories, and manipulate files. Windows machines have 2 CLIs, the legacy [Command Shell][1] and the newer [PowerShell][2]. For Mac users, the [Terminal][3] is your CLI. Regardless of operating system, the CLI is a simple and powerful tool.

## Writing about CLI commands

Good CLI documentation should contain:

* The command's name
* A clear and concise definition or description
* Syntax
* Optional arguments
* Examples

## Syntax basics

| Name            	| Symbol 	| Description                                                                                                                                                                                                                          	|
|-----------------	|--------	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Curly brackets 	| `{ } `   	| Delimits a set of mutually exclusive arguments when one of the arguments is required. If the arguments are optional, they are enclosed in brackets ([ ]).                                                                            	|
| Ellipsis        	| `. . .`  	| Indicates that you can specify multiple values for the previous argument.                                                                                                                                                            	|
| Pipe            	| `|`     	| Indicates mutually exclusive information similar to a Boolean OR. You can use the argument to the left of the separator or the argument to the right of the separator. You cannot use both arguments in a single use of the command. 	|
| Square brackets 	| `[ ]`   	| Identifies an optional argument. Arguments not enclosed in brackets are required.                                                                                                                                                    	|

## CLI reference

CLI documentation is ubiquitous. As a result, we encourage you to examine [Documenting Command Line Syntax][5] in the Google developer style guide. You won't go astray by following their style.

<!-- Reference links -->

[1]: https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands "CMD command shell"
[2]: https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7 "power shell"
[3]: https://support.apple.com/guide/terminal/welcome/mac "mac terminal"

[//]: # (Consider removing the Globus example)

[4]: https://docs.globus.org/cli/reference/whoami/ "Globus examples"
[5]: https://developers.google.com/style/code-syntax "Google documentation"
