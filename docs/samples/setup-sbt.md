# Installing and Verifying SBT 

![writing-sample](https://img.shields.io/badge/status-writing%20sample-brightgreen)

To create batch workflows, you need [SBT](https://www.scala-sbt.org/) 1.6.

## Install SBT

To install SBT, open a terminal window and:

1. Check the version by typing `sdk list sbt | grep "1\.6"`. This should return a list of SBT versions.

    - If v1.6 is not installed, continue to step 2.
    - If v1.6 is installed, verify the installation and/or continue to the next page.

1. Download and install version 1.6 by typing, `sdk install sbt 1.6.2`. 

1. Set the version to 1.6 by typing `sdk default sbt 1.6.2`. 

## Verify SBT

To verify that you have the correct version of SBT (1.6.2), open a terminal window and:

1. Type `which sbt`. The output results should look similar to the following:

    ```terminal
    /Users/<your_username>/.sdkman/candidates/sbt/current/bin/sbt
    ```

1. Type `sbt --version`. The output results should look similar to the following:

    ```terminal
    sbt version in this project: 1.6.2
    sbt script version: 1.6.2
    ```
