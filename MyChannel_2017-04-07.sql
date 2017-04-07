# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.15)
# Database: MyChannel
# Generation Time: 2017-04-07 10:27:25 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Address
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Address`;

CREATE TABLE `Address` (
  `AddressId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `AddressPlace` varchar(100) NOT NULL DEFAULT '',
  `AddressDetail` varchar(100) NOT NULL DEFAULT '',
  `AddressTel` varchar(11) NOT NULL DEFAULT '',
  `RewardPeople` varchar(4) NOT NULL DEFAULT '',
  `isDefault` int(1) NOT NULL,
  `UserId` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`AddressId`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `address_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `User` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Advertisement
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Advertisement`;

CREATE TABLE `Advertisement` (
  `AdsId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `AdsImgUrl` varchar(100) NOT NULL DEFAULT '',
  `GoodId` int(11) unsigned NOT NULL,
  PRIMARY KEY (`AdsId`),
  KEY `GoodId` (`GoodId`),
  CONSTRAINT `advertisement_ibfk_1` FOREIGN KEY (`GoodId`) REFERENCES `Good` (`GoodId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Evaluate
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Evaluate`;

CREATE TABLE `Evaluate` (
  `EvaluateId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `EvaluateMessage` varchar(100) NOT NULL DEFAULT '',
  `OrderId` int(11) unsigned NOT NULL,
  `EvaluateTime` datetime NOT NULL,
  `EvaluateStar` int(1) NOT NULL,
  `EvaluateImgUrl` varchar(100) NOT NULL DEFAULT '',
  `FatherEvaluateId` int(11) DEFAULT NULL,
  `Semaphore` int(1) NOT NULL,
  PRIMARY KEY (`EvaluateId`),
  KEY `OrderId` (`OrderId`),
  CONSTRAINT `evaluate_ibfk_1` FOREIGN KEY (`OrderId`) REFERENCES `Order` (`OrderId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Favorite
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Favorite`;

CREATE TABLE `Favorite` (
  `FavoriteId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `UserId` int(11) unsigned NOT NULL,
  `GoodId` int(11) unsigned NOT NULL,
  PRIMARY KEY (`FavoriteId`),
  KEY `UserId` (`UserId`),
  KEY `GoodId` (`GoodId`),
  CONSTRAINT `favorite_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `User` (`UserId`),
  CONSTRAINT `favorite_ibfk_2` FOREIGN KEY (`GoodId`) REFERENCES `Good` (`GoodId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Good
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Good`;

CREATE TABLE `Good` (
  `GoodId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `GoodName` varchar(6) NOT NULL DEFAULT '',
  `GoodDescrible` varchar(100) NOT NULL DEFAULT '',
  `GoodStock` int(11) NOT NULL,
  `GoodNetWeight` varchar(20) NOT NULL DEFAULT '',
  `GoodColor` varchar(20) NOT NULL DEFAULT '',
  `GoodMessage` varchar(100) NOT NULL DEFAULT '',
  `GoodImgUrl164` varchar(100) NOT NULL DEFAULT '',
  `GoodImgUrl60` varchar(100) NOT NULL DEFAULT '',
  `GoodImgUrl30` varchar(100) NOT NULL DEFAULT '',
  `GoodImgUrl430` varchar(100) NOT NULL DEFAULT '',
  `Semaphore` int(11) DEFAULT NULL,
  `GoodPoint` int(2) NOT NULL,
  `GoodDiscount` int(2) NOT NULL,
  PRIMARY KEY (`GoodId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table GoodTag
# ------------------------------------------------------------

DROP TABLE IF EXISTS `GoodTag`;

CREATE TABLE `GoodTag` (
  `GoodTagId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `GoodId` int(11) unsigned DEFAULT NULL,
  `TagId` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`GoodTagId`),
  KEY `GoodId` (`GoodId`),
  KEY `TagId` (`TagId`),
  CONSTRAINT `goodtag_ibfk_1` FOREIGN KEY (`GoodId`) REFERENCES `Good` (`GoodId`),
  CONSTRAINT `goodtag_ibfk_2` FOREIGN KEY (`TagId`) REFERENCES `Tag` (`TagId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Order
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Order`;

CREATE TABLE `Order` (
  `OrderId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `UserId` int(11) unsigned NOT NULL,
  `GoodId` int(11) unsigned NOT NULL,
  `GoodNumber` int(2) NOT NULL,
  `GoodNetWeight` varchar(10) NOT NULL DEFAULT '',
  `GoodColor` varchar(10) NOT NULL DEFAULT '',
  `isPay` int(1) NOT NULL,
  `isUnSubscribe` int(1) NOT NULL,
  `OrderTime` datetime NOT NULL,
  PRIMARY KEY (`OrderId`),
  KEY `UserId` (`UserId`),
  KEY `GoodId` (`GoodId`),
  CONSTRAINT `order_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `User` (`UserId`),
  CONSTRAINT `order_ibfk_2` FOREIGN KEY (`GoodId`) REFERENCES `Good` (`GoodId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table ShoppingCart
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ShoppingCart`;

CREATE TABLE `ShoppingCart` (
  `ShoppingCartId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `UserId` int(11) unsigned NOT NULL,
  `OrderId` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`ShoppingCartId`),
  KEY `UserId` (`UserId`),
  KEY `OrderId` (`OrderId`),
  CONSTRAINT `shoppingcart_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `User` (`UserId`),
  CONSTRAINT `shoppingcart_ibfk_2` FOREIGN KEY (`OrderId`) REFERENCES `Order` (`OrderId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table Tag
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Tag`;

CREATE TABLE `Tag` (
  `TagId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `TagName` varchar(10) NOT NULL DEFAULT '',
  `TagDescrible` varchar(100) NOT NULL DEFAULT '',
  `FatherTagId` int(11) DEFAULT NULL,
  PRIMARY KEY (`TagId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table User
# ------------------------------------------------------------

DROP TABLE IF EXISTS `User`;

CREATE TABLE `User` (
  `UserId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `UserName` varchar(6) NOT NULL DEFAULT '',
  `UserTel` varchar(11) NOT NULL DEFAULT '',
  `UserAddress` varchar(50) NOT NULL DEFAULT '',
  `UserEmail` varchar(50) NOT NULL DEFAULT '',
  `UserPassword` varchar(20) NOT NULL DEFAULT '',
  `UserIdentity` varchar(18) DEFAULT NULL,
  `UserBirth` date NOT NULL,
  `UserSex` int(1) DEFAULT NULL,
  `UserHeadUrl164` varchar(100) DEFAULT NULL,
  `UserHeadUrl60` varchar(100) DEFAULT NULL,
  `UserHeadUrl30` varchar(100) DEFAULT NULL,
  `isManager` int(1) NOT NULL,
  `Semaphore` int(1) DEFAULT NULL,
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
