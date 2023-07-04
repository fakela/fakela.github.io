# Installing and Verifying Scala

![writing-sample](https://img.shields.io/badge/status-writing%20sample-brightgreen)

To create batch workflows, you need [Scala](https://www.scala-lang.org/) 2.13.

## Install Scala

To install Scala, open a terminal window and:

1. Check the version by typing `sdk list scala | grep "2\.13"`. This should return a list of Scala versions.

    - If v2.13 is not installed, continue to step 2.
    - If v2.13 is installed, verify the installation and/or continue to the next page.

1. Download and install version 2.13 by typing, `sdk install scala 2.13.8`. 

1. Set the version to 2.13.8 by typing, `sdk default scala 2.13.8`.

## Verify Scala

To verify that you have the correct version of Scala (2.13), open a terminal window and:

1. Type `which scala`. This should return the scala version from a folder named `.sdkman` and look similar to the following:

    ```terminal
    /Users/<your_username>/ .sdkman/candidates/scala/current/bin/scala
    ```

1. Type `scala --version`. This should return results similar to the following:

    ```terminal
    Scala code runner version 2.13.8 -- Copyright 2002-2022 LAMP/EPFL and Lightbend, Inc.
    ```
