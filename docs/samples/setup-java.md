# Installing and Verifying Java/JDK

![writing-sample](https://img.shields.io/badge/status-writing%20sample-brightgreen)

To finish this tutorial, you need [Amazon Coretto](https://aws.amazon.com/corretto/?filtered-posts.sort-by=item.additionalFields.createdDate&filtered-posts.sort-order=desc) Java/JDK version 11.

## Install Java/JDK

To install Java/JDK 11, open a terminal window and:

1. Check the version availability by typing, `sdk list java | grep "11.*amzn"`. The output results should look similar to the following:
    
    ```terminal
    |  | 11.0.16  | amzn |  | 11.0.16-amzn
    ```

1. If you don't have v11, download and install it by typing, `sdk install java 11.0.16-amzn`.

1. Set the version to 11 by typing, `sdk default java 11.0.16-amzn`.

## Verify Java/JDK

After installation, verify that you have the correct version Java/JDK version (V11). To check, open a terminal window and:

1. Type `which java`. The output results should look similar to the following:

    ```terminal
    /Users/<your_username>/.sdkman/candidates/java/current/bin/java
    ```

1. Type `java --version`. The output results should look similar to the following:

    ```terminal
    openjdk 11.0.16 2022-07-19 LTS
    OpenJDK Runtime Environment Corretto-11.0.16.8.1 (build 11.0.16+8-LTS)
    OpenJDK 64-Bit Server VM Corretto-11.0.16.8.1 (build 11.0.16+8-LTS, mixed mode)
    ```
