FROM openjdk:17-jdk-alpine AS build
ARG JAR_FILE=target/*.jar
COPY ./target/*.jar chatbot.jar
# Run the JAR file
ENTRYPOINT ["java", "-jar", "chatbot.jar"]