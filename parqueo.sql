-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: parqueo
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `listados`
--

DROP TABLE IF EXISTS `listados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listados` (
  `id` int NOT NULL AUTO_INCREMENT,
  `matricula` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `clasificacion` varchar(10) DEFAULT NULL,
  `total_acumulado` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `matricula` (`matricula`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listados`
--

LOCK TABLES `listados` WRITE;
/*!40000 ALTER TABLE `listados` DISABLE KEYS */;
INSERT INTO `listados` VALUES (23,'sss','Oficial',23),(25,'redasd','oficial',0),(28,'svg','residente',67);
/*!40000 ALTER TABLE `listados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registros`
--

DROP TABLE IF EXISTS `registros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `matricula` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `fecha_entrada` datetime DEFAULT NULL,
  `fecha_salida` datetime DEFAULT NULL,
  `clasificacion` varchar(18) DEFAULT 'NULL',
  `fecha_pago` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registros`
--

LOCK TABLES `registros` WRITE;
/*!40000 ALTER TABLE `registros` DISABLE KEYS */;
INSERT INTO `registros` VALUES (45,'red','2022-10-14 23:37:48','2022-10-15 11:30:08','No Residente',NULL),(46,'redkk','2022-10-14 23:41:26','2022-10-14 23:47:09','No Residente',NULL),(47,'svg','2022-10-14 23:45:24','2022-10-17 15:18:55','residente',NULL),(48,'svg','2022-10-15 11:24:23','2022-10-17 15:18:55','residente',NULL),(50,'red','2022-10-15 11:26:13','2022-10-15 11:30:08','No Residente',NULL),(51,'svg','2022-10-15 11:29:46','2022-10-17 15:18:55','residente',NULL),(52,'svgdf','2022-10-15 11:33:18','2022-10-15 11:38:34','No Residente',NULL),(53,'svg','2022-10-15 11:49:45','2022-10-17 15:18:55','residente',NULL),(54,'svg','2022-10-15 12:09:18','2022-10-17 15:18:55','residente',NULL),(55,'svg','2022-10-15 12:12:37','2022-10-17 15:18:55','residente',NULL),(56,'svg','2022-10-15 12:24:42','2022-10-17 15:18:55','residente',NULL),(57,'svg','2022-10-15 13:49:07','2022-10-17 15:18:55','residente','2022-10-17 14:34:56'),(58,'svsss','2022-10-15 13:49:18',NULL,'No Residente',NULL);
/*!40000 ALTER TABLE `registros` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-17 20:52:47
