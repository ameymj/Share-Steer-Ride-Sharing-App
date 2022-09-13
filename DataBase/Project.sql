-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: sep22
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `booking_id` int NOT NULL AUTO_INCREMENT,
  `ride_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `number_of_seats` int DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  `booking_date` date DEFAULT NULL,
  `amount` int NOT NULL,
  PRIMARY KEY (`booking_id`),
  KEY `ride_id` (`ride_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`ride_id`) REFERENCES `ride` (`ride_id`),
  CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `from_city`
--

DROP TABLE IF EXISTS `from_city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `from_city` (
  `city_id` int NOT NULL,
  `city_name` varchar(30) NOT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `from_city`
--

LOCK TABLES `from_city` WRITE;
/*!40000 ALTER TABLE `from_city` DISABLE KEYS */;
INSERT INTO `from_city` VALUES (1,'Pune'),(2,'Mumbai'),(3,'Aurangabad'),(4,'Nashik'),(5,'Nagpur'),(6,'Thane'),(7,'Pimpri-Chinchwad'),(8,'Alibag'),(9,'Ahmednagar'),(10,'Kolhapur'),(11,'Solapur'),(12,'Satara'),(13,'Sangli'),(14,'Amravati'),(15,'Akola'),(16,'Wardha'),(17,'Yeotmal'),(18,'Buldhana'),(19,'Gondia'),(20,'Gadchiroli'),(21,'Chandrapur'),(22,'Nanded'),(23,'Jalgaon'),(24,'Usmanabad'),(25,'Latur'),(26,'Beed'),(27,'Sindhudurg'),(28,'Ratnagiri'),(29,'Jalna'),(30,'Dhule'),(31,'Nadurbar'),(32,'Washim'),(33,'Palghar'),(34,'Bhandara'),(35,'Parbhani'),(36,'Hingoli');
/*!40000 ALTER TABLE `from_city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rating` (
  `driver_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  KEY `driver_id` (`driver_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`driver_id`) REFERENCES `vehicle` (`user_id`),
  CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `rating_chk_1` CHECK ((`rating` <= 5))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ride`
--

DROP TABLE IF EXISTS `ride`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ride` (
  `ride_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `vehicle_id` int DEFAULT NULL,
  `date_of_journey` date NOT NULL,
  `time_of_journey` time NOT NULL,
  `from_city` int NOT NULL,
  `to_city` int NOT NULL,
  `total_seats` int NOT NULL,
  `available_seats` int NOT NULL,
  `status` tinyint(1) DEFAULT '0',
  `ride_cost` int NOT NULL,
  `description` varchar(300) DEFAULT NULL,
  `only_females` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`ride_id`),
  KEY `fk_1` (`user_id`),
  KEY `fk_2` (`vehicle_id`),
  KEY `from_city` (`from_city`),
  KEY `to_city` (`to_city`),
  CONSTRAINT `fk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `fk_2` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle` (`vehicle_id`),
  CONSTRAINT `ride_ibfk_1` FOREIGN KEY (`from_city`) REFERENCES `from_city` (`city_id`),
  CONSTRAINT `ride_ibfk_2` FOREIGN KEY (`to_city`) REFERENCES `from_city` (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ride`
--

LOCK TABLES `ride` WRITE;
/*!40000 ALTER TABLE `ride` DISABLE KEYS */;
INSERT INTO `ride` VALUES (1,1,1,'2022-09-07','22:20:00',1,2,4,4,0,560,'Casual',0),(2,1,1,'2022-09-08','16:11:04',5,7,8,8,0,960,'Dairy Service',0),(3,2,1,'2022-09-10','16:12:26',8,9,5,5,0,440,'trip',0);
/*!40000 ALTER TABLE `ride` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ride_status`
--

DROP TABLE IF EXISTS `ride_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ride_status` (
  `ride_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  KEY `ride_id` (`ride_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `ride_status_ibfk_1` FOREIGN KEY (`ride_id`) REFERENCES `ride` (`ride_id`),
  CONSTRAINT `ride_status_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ride_status`
--

LOCK TABLES `ride_status` WRITE;
/*!40000 ALTER TABLE `ride_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `ride_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `to_city`
--

DROP TABLE IF EXISTS `to_city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `to_city` (
  `city_id` int NOT NULL,
  `city_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `to_city`
--

LOCK TABLES `to_city` WRITE;
/*!40000 ALTER TABLE `to_city` DISABLE KEYS */;
INSERT INTO `to_city` VALUES (1,'Pune'),(2,'Mumbai'),(3,'Aurangabad'),(4,'Nashik'),(5,'Nagpur'),(6,'Thane'),(7,'Pimpri-Chinchwad'),(8,'Alibag'),(9,'Ahmednagar'),(10,'Kolhapur'),(11,'Solapur'),(12,'Satara'),(13,'Sangli'),(14,'Amravati'),(15,'Akola'),(16,'Wardha'),(17,'Yeotmal'),(18,'Buldhana'),(19,'Gondia'),(20,'Gadchiroli'),(21,'Chandrapur'),(22,'Nanded'),(23,'Jalgaon'),(24,'Usmanabad'),(25,'Latur'),(26,'Beed'),(27,'Sindhudurg'),(28,'Ratnagiri'),(29,'Jalna'),(30,'Dhule'),(31,'Nadurbar'),(32,'Washim'),(33,'Palghar'),(34,'Bhandara'),(35,'Parbhani'),(36,'Hingoli');
/*!40000 ALTER TABLE `to_city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(15) DEFAULT NULL,
  `password` varchar(15) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `birth_date` date NOT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `email_id` varchar(30) NOT NULL,
  `contact` varchar(12) NOT NULL,
  `aadhar_image` longblob,
  `user_image` longblob,
  `driving_licence` longblob,
  `is_verified` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `last_name_UNIQUE` (`last_name`),
  UNIQUE KEY `user_name` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'tushar','root','Tushar','Sthul','1998-06-09','Male','tusharsthul121@gmail.com','7397909355',NULL,NULL,NULL,0),(2,'mahima','mima','Mahima','Ingole','2004-09-24','Female','mimaingole@gmail.com','8080036934',NULL,NULL,NULL,0),(3,'amey_joshi','amney12345','amey','joshi','2022-09-07','Male','','7020369904',NULL,NULL,NULL,0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle` (
  `vehicle_id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `vehicle_model` varchar(20) NOT NULL,
  `vehicle_reg_number` int NOT NULL,
  `capacity` int NOT NULL,
  `vehicle_image` blob NOT NULL,
  PRIMARY KEY (`vehicle_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `vehicle_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
INSERT INTO `vehicle` VALUES (1,1,'Volvo-250',123456,4,_binary '0');
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-13  9:17:51
