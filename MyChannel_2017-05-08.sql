# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.15)
# Database: MyChannel
# Generation Time: 2017-05-08 08:55:33 +0000
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
  `RewardPeople` varchar(6) NOT NULL DEFAULT '',
  `isDefault` int(1) NOT NULL,
  `UserId` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`AddressId`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `address_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `User` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Address` WRITE;
/*!40000 ALTER TABLE `Address` DISABLE KEYS */;

INSERT INTO `Address` (`AddressId`, `AddressPlace`, `AddressDetail`, `AddressTel`, `RewardPeople`, `isDefault`, `UserId`)
VALUES
	(1,'陕西省 西安市 长安区 兴隆街道','陕西省西安市西安电子科技大学长安校区','18829212801','zazalu',1,2),
	(3,'福建 莆田 搜索','上虞曹娥街道振兴新村6A403室','18829212801','zazalu',0,2),
	(4,'陕西铜川耀州区','啊我的家啊老王金德拉克五角大楼卡','18829212801','党帅男',0,2),
	(5,'河北秦皇岛抚宁区','403室','18829212801','何镓钧',0,25),
	(6,'上海长宁null','404室','18829212801','宋红阳',1,25),
	(7,'辽宁营口盖州市','405室','18829212801','党帅男',0,28),
	(8,'河北唐山开平区','404室','18829212801','何镓钧',1,28);

/*!40000 ALTER TABLE `Address` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Advertisement
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Advertisement`;

CREATE TABLE `Advertisement` (
  `AdsId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `AdsImgUrl` varchar(100) NOT NULL DEFAULT '',
  `GoodId` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`AdsId`),
  KEY `GoodId` (`GoodId`),
  CONSTRAINT `advertisement_ibfk_1` FOREIGN KEY (`GoodId`) REFERENCES `Good` (`GoodId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Advertisement` WRITE;
/*!40000 ALTER TABLE `Advertisement` DISABLE KEYS */;

INSERT INTO `Advertisement` (`AdsId`, `AdsImgUrl`, `GoodId`)
VALUES
	(13,'/zazaluImg/img/Ads/shouyeAds1.jpg',28),
	(14,'/zazaluImg/img/Ads/shouyeAds2.jpg',28);

/*!40000 ALTER TABLE `Advertisement` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Evaluate
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Evaluate`;

CREATE TABLE `Evaluate` (
  `EvaluateId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `EvaluateMessage` varchar(100) NOT NULL DEFAULT '',
  `OrdersId` int(11) unsigned NOT NULL,
  `UserId` int(11) unsigned NOT NULL,
  `EvaluateTime` datetime NOT NULL,
  `EvaluateStar` int(1) DEFAULT NULL,
  `EvaluateImgUrl` varchar(500) DEFAULT '',
  `FatherEvaluateId` int(11) DEFAULT NULL,
  `Semaphore` int(1) NOT NULL,
  PRIMARY KEY (`EvaluateId`),
  KEY `OrdersId` (`OrdersId`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `evaluate_ibfk_1` FOREIGN KEY (`OrdersId`) REFERENCES `Orders` (`OrdersId`),
  CONSTRAINT `evaluate_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `User` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Evaluate` WRITE;
/*!40000 ALTER TABLE `Evaluate` DISABLE KEYS */;

INSERT INTO `Evaluate` (`EvaluateId`, `EvaluateMessage`, `OrdersId`, `UserId`, `EvaluateTime`, `EvaluateStar`, `EvaluateImgUrl`, `FatherEvaluateId`, `Semaphore`)
VALUES
	(19,'不错',27,22,'2017-05-08 10:12:27',NULL,'/zazaluImg/img/evaluateImg/1494209547874/imgbox1.jpg&',0,0),
	(20,'是不错',27,22,'2017-05-08 10:12:48',NULL,'/zazaluImg/img/evaluateImg/1494209568808/imgbox1.jpg&',19,0),
	(21,'稍微有点瑕疵',28,22,'2017-05-08 10:15:28',NULL,'/zazaluImg/img/evaluateImg/1494209728490/imgbox2.jpg&',0,0),
	(22,'发货快',29,22,'2017-05-08 10:15:42',NULL,'/zazaluImg/img/evaluateImg/1494209742664/imgbox4.jpg&',0,0),
	(23,'非常不错',30,28,'2017-05-08 11:04:02',NULL,'/zazaluImg/img/evaluateImg/1494212642439/demo-image3.jpg&',0,0),
	(24,'测试内容',31,28,'2017-05-08 14:42:13',NULL,'/zazaluImg/img/evaluateImg/1494225733365/231110O95_0.jpg&',0,0),
	(25,'测试回复',31,28,'2017-05-08 14:42:41',NULL,NULL,24,0);

/*!40000 ALTER TABLE `Evaluate` ENABLE KEYS */;
UNLOCK TABLES;


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

LOCK TABLES `Favorite` WRITE;
/*!40000 ALTER TABLE `Favorite` DISABLE KEYS */;

INSERT INTO `Favorite` (`FavoriteId`, `UserId`, `GoodId`)
VALUES
	(11,22,22),
	(12,28,23);

/*!40000 ALTER TABLE `Favorite` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Good
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Good`;

CREATE TABLE `Good` (
  `GoodId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `GoodName` varchar(6) NOT NULL DEFAULT '',
  `GoodDescrible` varchar(100) NOT NULL DEFAULT '',
  `GoodStock` int(11) NOT NULL,
  `GoodNetWeight` varchar(20) NOT NULL DEFAULT '',
  `GoodPrice` int(11) DEFAULT NULL,
  `GoodColor` varchar(100) NOT NULL DEFAULT '',
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

LOCK TABLES `Good` WRITE;
/*!40000 ALTER TABLE `Good` DISABLE KEYS */;

INSERT INTO `Good` (`GoodId`, `GoodName`, `GoodDescrible`, `GoodStock`, `GoodNetWeight`, `GoodPrice`, `GoodColor`, `GoodMessage`, `GoodImgUrl164`, `GoodImgUrl60`, `GoodImgUrl30`, `GoodImgUrl430`, `Semaphore`, `GoodPoint`, `GoodDiscount`)
VALUES
	(22,'good1','This is a perfect Good!!!!!!!',15,'50ml&100ml&150ml',100,'rgb(83,48,150)&rgb(70,30,148)&rgb(81,143,66)&','nicenicenicenicenicenicenice','/zazaluImg/img/goods/good1/goodImg164.png','/zazaluImg/img/goods/good1/goodImg60.png','/zazaluImg/img/goods/good1/goodImg30.png','/zazaluImg/img/goods/good1/goodImg430.jpg',1,4,10),
	(23,'good2','This is a perfect Good!!!!!!!',18,'50ml&100ml&150ml',110,'rgb(48,130,51)&rgb(219,59,98)&rgb(82,48,148)&','nicenicenicenicenicenicenice','/zazaluImg/img/goods/good2/goodImg164.png','/zazaluImg/img/goods/good2/goodImg60.png','/zazaluImg/img/goods/good2/goodImg30.png','/zazaluImg/img/goods/good2/goodImg430.jpg',1,8,6),
	(24,'good3','This is a perfect Good!!!!!!!',30,'50ml&100ml&150ml',120,'rgb(155, 142, 180)&rgb(155, 142, 180)&rgb(155, 142, 180)&','nicenicenicenicenicenicenice','/zazaluImg/img/goods/good3/goodImg164.png','/zazaluImg/img/goods/good3/goodImg60.png','/zazaluImg/img/goods/good3/goodImg30.png','/zazaluImg/img/goods/good3/goodImg430.jpg',1,6,7),
	(25,'good4','This is a perfect Good!!!!!!!',35,'50ml&100ml&150ml',130,'rgb(155, 142, 180)&rgb(155, 142, 180)&rgb(155, 142, 180)&','nicenicenicenicenicenicenice','/zazaluImg/img/goods/good4/goodImg164.png','/zazaluImg/img/goods/good4/goodImg60.png','/zazaluImg/img/goods/good4/goodImg30.png','/zazaluImg/img/goods/good4/goodImg430.png',1,8,7),
	(26,'good5','This is a perfect Good!!!!!!!',38,'50ml&100ml&150ml',140,'rgb(155, 142, 180)&rgb(155, 142, 180)&rgb(155, 142, 180)&','nicenicenicenicenicenicenice','/zazaluImg/img/goods/good5/goodImg164.jpg','/zazaluImg/img/goods/good5/goodImg60.jpg','/zazaluImg/img/goods/good5/goodImg30.jpg','/zazaluImg/img/goods/good5/goodImg430.jpg',1,7,5),
	(27,'good6','This is a perfect Good!!!!!!!',45,'50ml&100ml&150ml',145,'rgb(155, 142, 180)&rgb(155, 142, 180)&rgb(155, 142, 180)&','nicenicenicenicenicenicenice','/zazaluImg/img/goods/good6/goodImg164.jpg','/zazaluImg/img/goods/good6/goodImg60.jpg','/zazaluImg/img/goods/good6/goodImg30.jpg','/zazaluImg/img/goods/good6/goodImg430.jpg',1,9,5),
	(28,'good7','This is a perfect Good!!!!!!!',14,'50ml&100ml&150ml',160,'rgb(155, 142, 180)&rgb(155, 142, 180)&rgb(155, 142, 180)&','nicenicenicenicenicenicenice','/zazaluImg/img/goods/good7/goodImg164.jpg','/zazaluImg/img/goods/good7/goodImg60.jpg','/zazaluImg/img/goods/good7/goodImg30.jpg','/zazaluImg/img/goods/good7/goodImg430.jpg',1,8,9),
	(29,'good8','this is  good8',10,'50ml&100ml&150ml',300,'rgb(180,142,167)&rgb(21,109,72)&','nicenicenicenicenicenicenice','/zazaluImg/img/goods/good8/goodImg164.jpg','/zazaluImg/img/goods/good8/goodImg60.jpg','/zazaluImg/img/goods/good8/goodImg30.jpg','/zazaluImg/img/goods/good8/goodImg430.jpg',1,7,7);

/*!40000 ALTER TABLE `Good` ENABLE KEYS */;
UNLOCK TABLES;


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



# Dump of table Orders
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Orders`;

CREATE TABLE `Orders` (
  `OrdersId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `UserId` int(11) unsigned NOT NULL,
  `GoodId` int(11) unsigned NOT NULL,
  `GoodNumber` int(2) NOT NULL,
  `GoodNetWeight` varchar(100) NOT NULL DEFAULT '',
  `GoodColor` varchar(100) NOT NULL DEFAULT '',
  `isPay` int(1) NOT NULL,
  `isUnSubscribe` int(1) NOT NULL,
  `isFaHuo` int(1) DEFAULT NULL,
  `isEvaluate` int(1) DEFAULT NULL,
  `OrderTime` datetime NOT NULL,
  PRIMARY KEY (`OrdersId`),
  KEY `UserId` (`UserId`),
  KEY `GoodId` (`GoodId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `User` (`UserId`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`GoodId`) REFERENCES `Good` (`GoodId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;

INSERT INTO `Orders` (`OrdersId`, `UserId`, `GoodId`, `GoodNumber`, `GoodNetWeight`, `GoodColor`, `isPay`, `isUnSubscribe`, `isFaHuo`, `isEvaluate`, `OrderTime`)
VALUES
	(27,22,22,1,'50ml','rgb(70, 30, 148)',1,0,1,1,'2017-05-08 10:11:29'),
	(28,22,22,1,'100ml','rgb(81, 143, 66)',1,0,1,1,'2017-05-08 10:13:46'),
	(29,22,22,1,'150ml','rgb(70, 30, 148)',1,0,1,1,'2017-05-08 10:13:55'),
	(30,28,26,2,'100ml','rgb(155, 142, 180)',1,0,1,1,'2017-05-08 11:03:00'),
	(31,28,23,1,'50ml','rgb(82, 48, 148)',1,0,1,1,'2017-05-08 14:40:47'),
	(32,28,22,1,'100ml','rgb(81, 143, 66)',1,0,0,0,'2017-05-08 14:43:27'),
	(33,28,22,1,'50ml','rgb(70, 30, 148)',0,0,0,0,'2017-05-08 14:43:37'),
	(34,22,23,1,'100ml','rgb(82, 48, 148)',1,0,0,0,'2017-05-08 16:19:19'),
	(35,22,23,1,'150ml','rgb(219, 59, 98)',1,0,0,0,'2017-05-08 16:20:11'),
	(36,22,23,1,'50ml','rgb(82, 48, 148)',1,0,0,0,'2017-05-08 16:20:15'),
	(37,22,23,1,'50ml','rgb(48, 130, 51)',1,0,0,0,'2017-05-08 16:28:43'),
	(38,22,23,1,'100ml','rgb(48, 130, 51)',1,0,0,0,'2017-05-08 16:28:46'),
	(39,22,23,1,'150ml','rgb(48, 130, 51)',1,0,0,0,'2017-05-08 16:28:47');

/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ShoppingCart
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ShoppingCart`;

CREATE TABLE `ShoppingCart` (
  `ShoppingCartId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `UserId` int(11) unsigned NOT NULL,
  `OrdersId` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`ShoppingCartId`),
  KEY `UserId` (`UserId`),
  KEY `OrdersId` (`OrdersId`),
  CONSTRAINT `shoppingcart_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `User` (`UserId`),
  CONSTRAINT `shoppingcart_ibfk_2` FOREIGN KEY (`OrdersId`) REFERENCES `Orders` (`OrdersId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `ShoppingCart` WRITE;
/*!40000 ALTER TABLE `ShoppingCart` DISABLE KEYS */;

INSERT INTO `ShoppingCart` (`ShoppingCartId`, `UserId`, `OrdersId`)
VALUES
	(4,28,33);

/*!40000 ALTER TABLE `ShoppingCart` ENABLE KEYS */;
UNLOCK TABLES;


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
  `UserName` varchar(6) DEFAULT '',
  `UserTel` varchar(11) DEFAULT '',
  `UserAddress` varchar(50) DEFAULT '',
  `UserEmail` varchar(50) DEFAULT '',
  `UserPassword` varchar(20) DEFAULT '',
  `UserIdentity` varchar(18) DEFAULT NULL,
  `UserBirth` date DEFAULT NULL,
  `UserSex` int(1) DEFAULT NULL,
  `UserHeadUrl164` varchar(100) DEFAULT NULL,
  `UserHeadUrl60` varchar(100) DEFAULT NULL,
  `UserHeadUrl30` varchar(100) DEFAULT NULL,
  `isManager` int(1) DEFAULT NULL,
  `Semaphore` int(1) DEFAULT NULL,
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;

INSERT INTO `User` (`UserId`, `UserName`, `UserTel`, `UserAddress`, `UserEmail`, `UserPassword`, `UserIdentity`, `UserBirth`, `UserSex`, `UserHeadUrl164`, `UserHeadUrl60`, `UserHeadUrl30`, `isManager`, `Semaphore`)
VALUES
	(2,'zazalu','18829212801','浙江绍兴上虞','hejiajun1432@sina.com','he65177032','330682199411035254','1994-11-03',1,'/zazaluImg/img/user/zazalu/personalImgHead164.png','/zazaluImg/img/user/zazalu/personalImgHead60.png','/zazaluImg/img/user/zazalu/personalImgHead30.png',0,1),
	(3,'shy123','18829212801','陕西绍兴上虞','hejiajun1432@sina.com','he_65177032','330682199411035254','1940-01-01',0,'/zazaluImg/img/user/shy123/personalImgHead164.png','/zazaluImg/img/user/shy123/personalImgHead60.png','/zazaluImg/img/user/shy123/personalImgHead30.png',0,0),
	(4,'wxp123','18829212801','陕西西安上虞','hejiajun1432@sina.com','he_65177032','330682199411035254',NULL,NULL,'/zazaluImg/img/user/user1/personalImgHead164.png','/zazaluImg/img/user/user1/personalImgHead60.png','/zazaluImg/img/user/user1/personalImgHead30.png',0,0),
	(5,'fcyj12','18829212801','陕西西安上虞','hejiajun1432@sina.com','he_65177032','330682199411035254',NULL,NULL,'/zazaluImg/img/user/user1/personalImgHead164.png','/zazaluImg/img/user/user1/personalImgHead60.png','/zazaluImg/img/user/user1/personalImgHead30.png',0,0),
	(6,'ldp123','18829212801','陕西西安上虞','hejiajun1432@sina.com','he_65177032','330682199411035254',NULL,NULL,'/zazaluImg/img/user/user1/personalImgHead164.png','/zazaluImg/img/user/user1/personalImgHead60.png','/zazaluImg/img/user/user1/personalImgHead30.png',0,0),
	(7,'ys123','18829212801','福建三明三元区','hejiajun1432@sina.com','he_65177032','',NULL,NULL,'/zazaluImg/img/user/user1/personalImgHead164.png','/zazaluImg/img/user/user1/personalImgHead60.png','/zazaluImg/img/user/user1/personalImgHead30.png',0,0),
	(14,'hejia','18829212801','陕西西安上虞','hejiajun1432@gmail.com','he_65177032','330682199411035254','1940-01-01',0,'/zazaluImg/img/user/hejia/personalImgHead164.png','/zazaluImg/img/user/hejia/personalImgHead60.png','/zazaluImg/img/user/hejia/personalImgHead30.png',0,0),
	(15,'hbz123','18829212801','浙江西安上虞','hejiajun1432@gmail.com','he_65177032','330682199411035254','1940-01-01',0,'/zazaluImg/img/user/hbz123/personalImgHead164.png','/zazaluImg/img/user/hbz123/personalImgHead60.png','/zazaluImg/img/user/hbz123/personalImgHead30.png',0,0),
	(16,'mmg','18829212801','浙江西安上虞','hejiajun1432@gmail.com','123','330682199411035254','1994-11-03',1,'/zazaluImg/img/user/mmg/personalImgHead164.png','/zazaluImg/img/user/mmg/personalImgHead60.png','/zazaluImg/img/user/mmg/personalImgHead30.png',1,1),
	(17,'wsy123','18829212801','陕西西安上虞','hejiajun1432@sina.com','he_65177032',NULL,NULL,NULL,'/zazaluImg/img/user/user1/personalImgHead164.png','/zazaluImg/img/user/user1/personalImgHead60.png','/zazaluImg/img/user/user1/personalImgHead30.png',0,0),
	(18,'wsy111','18829212801','陕西西安上虞','hejiajun1432@sina.com','he_65177032',NULL,NULL,NULL,'/zazaluImg/img/user/user1/personalImgHead164.png','/zazaluImg/img/user/user1/personalImgHead60.png','/zazaluImg/img/user/user1/personalImgHead30.png',0,0),
	(19,'wsy112','18829212801','陕西西安上虞','hejiajun1432@sina.com','he_65177032',NULL,NULL,NULL,'/zazaluImg/img/user/wsy112/personalImgHead164.png','/zazaluImg/img/user/wsy112/personalImgHead60.png','/zazaluImg/img/user/wsy112/personalImgHead30.png',0,0),
	(20,'wxp12','18829212801','福建三明三元区','hejiajun1432@sina.com','he_65177032',NULL,NULL,NULL,'/zazaluImg/img/user/user1/personalImgHead164.png','/zazaluImg/img/user/user1/personalImgHead60.png','/zazaluImg/img/user/user1/personalImgHead30.png',0,0),
	(21,'wxp1','18829212801','福建三明三元区','hejiajun1432@sina.com','he_65177032',NULL,NULL,NULL,'/zazaluImg/img/user/user1/personalImgHead164.png','/zazaluImg/img/user/user1/personalImgHead60.png','/zazaluImg/img/user/user1/personalImgHead30.png',0,0),
	(22,'hjj1','18829212801','浙江绍兴上虞区','hejiajun1432@sina.com','he_65177032','330682199411035254','1994-11-03',1,'/zazaluImg/img/user/user1/personalImgHead164.png','/zazaluImg/img/user/user1/personalImgHead60.png','/zazaluImg/img/user/user1/personalImgHead30.png',0,1),
	(25,'hjj2','18829212801','吉林四平伊通满族自治县','hejiajun1432@sina.com','he_65177032','330682199411035254','1994-11-03',1,'/zazaluImg/img/user/user1/personalImgHead164.png','/zazaluImg/img/user/user1/personalImgHead60.png','/zazaluImg/img/user/user1/personalImgHead30.png',0,1),
	(28,'user1','18829212801','河北保定清苑区','ne11j2@sina.com','he_65177032','330682199411035254','1994-11-03',0,'/zazaluImg/img/user/user1/personalImgHead164.png','/zazaluImg/img/user/user1/personalImgHead60.png','/zazaluImg/img/user/user1/personalImgHead30.png',0,0),
	(29,'user2','18829212801',NULL,'ne11j2@sina.com','he_65177032','330682199411035254',NULL,1,'/zazaluImg/img/user/user1/personalImgHead164.png','/zazaluImg/img/user/user1/personalImgHead60.png','/zazaluImg/img/user/user1/personalImgHead30.png',0,1);

/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
