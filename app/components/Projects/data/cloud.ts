import { Project } from "../types";

export const cloudProjects: Project[] = [
  {
    title: "Weather Dashboard Cloud Pipeline",
    description:
      "Developed a cloud-based weather data pipeline that fetches near real-time weather information from Nigerian cities and stores structured data in Amazon S3 for future analysis.",
    category: "cloud",
    tech: ["AWS S3", "Python", "Boto3", "OpenWeather API", "AWS CLI", "dotenv"],
    highlights: [
      "Fetched live weather data using the OpenWeather API",
      "Stored structured datasets securely in Amazon S3",
      "Managed AWS credentials and secrets using environment variables",
      "Built cloud automation workflows with Python and Boto3",
      "Configured AWS infrastructure",
    ],
    github: "https://github.com/Izudavo/Day1_CozyCloud_DevopsChallenge",
    image: "/projects/weatherapp_demo.png",
    accent: "#0EA5E9",
  },

  {
    title: "NBA Data Lake",
    description:
      "Designed a serverless AWS data lake pipeline for storing, transforming, and querying NBA standings data using S3, AWS Glue, and Amazon Athena.",
    category: "cloud",
    tech: [
      "AWS S3",
      "AWS Glue",
      "Amazon Athena",
      "Python",
      "SQL",
      "SportsDataIO",
    ],
    highlights: [
      "Built a cloud-native NBA data lake architecture on AWS",
      "Extracted and transformed NBA standings data using AWS Glue",
      "Queried structured datasets directly with Amazon Athena and SQL",
      "Stored season statistics in Amazon S3 for long-term access",
      "Implemented secure IAM role permissions across AWS services",
    ],
    github: "https://github.com/Izudavo/DAY3-COZYCLOUD-DEVOPS--NBADATALAKE",
    image: "/projects/nba_sns.jpeg",
    accent: "#8B5CF6",
  },

  {
    title: "Football Matchday Notifications",
    description:
      "Built a cloud-based football fixtures notification system that delivers scheduled match updates from major leagues to subscribed users using AWS serverless infrastructure.",
    category: "cloud",
    tech: [
      "AWS Lambda",
      "Amazon SNS",
      "EventBridge",
      "Python",
      "REST API",
      "IAM",
    ],
    highlights: [
      "Integrated football-data.org API for live football fixtures",
      "Automated hourly notifications using Amazon EventBridge",
      "Delivered email alerts through Amazon SNS",
      "Implemented secure IAM policies using least privilege principles",
      "Built serverless workflow using AWS Lambda and Python",
    ],
    github: "https://github.com/Izudavo/Day2_CozyCloud_DevopsChallenge",
    image: "/projects/football_sns.png",
    accent: "#22C55E",
  },

];