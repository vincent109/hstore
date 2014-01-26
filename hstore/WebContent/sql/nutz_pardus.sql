/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50169
Source Host           : localhost:3306
Source Database       : nutz_pardus

Target Server Type    : MYSQL
Target Server Version : 50169
File Encoding         : 65001

Date: 2014-01-19 23:46:13
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `hs_user`
-- ----------------------------
DROP TABLE IF EXISTS `hs_user`;
CREATE TABLE `hs_user` (
  `ID` int(32) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) DEFAULT NULL,
  `SEX` int(32) DEFAULT NULL,
  `MAJOR` varchar(50) DEFAULT NULL,
  `POSITION` varchar(50) DEFAULT NULL,
  `BIRTHDAY` datetime DEFAULT NULL,
  `JOIN_TIME` datetime DEFAULT NULL,
  `STATUS` int(32) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hs_user
-- ----------------------------
INSERT INTO `hs_user` VALUES ('1', 'WebMaster', '1', '计算机科学与技术', 'PE', '2014-01-02 10:04:21', '2014-01-02 10:04:21', '1');
INSERT INTO `hs_user` VALUES ('4', '的发烧发的', '2', 'erewr发大水', 'rewr发大水', '2014-01-01 00:00:00', '1990-02-14 00:00:00', '1');
INSERT INTO `hs_user` VALUES ('7', '你的名字', '2', '环境工程', 'QA', '2014-01-01 00:00:00', '2019-01-16 00:00:00', '1');
INSERT INTO `hs_user` VALUES ('12', '海南贝贝', '1', '生物工程', '需求专员', '2013-01-09 00:00:00', '2014-01-07 00:00:00', '1');
INSERT INTO `hs_user` VALUES ('13', '名称广场', '2', '交通工程', '搬运工', '1988-11-15 00:00:00', '2014-01-07 00:00:00', '1');
INSERT INTO `hs_user` VALUES ('16', 'fdsafdsaf', '2', 'fdsaf', 'fdsafd', '2010-08-17 00:00:00', '2014-01-07 00:00:00', '1');
INSERT INTO `hs_user` VALUES ('18', '东江滨parker', '1', '园林设计', '管理员', '2010-02-09 00:00:00', '2014-01-01 00:00:00', '1');
INSERT INTO `hs_user` VALUES ('19', '海峡影院', '2', '电子商务', '主管', '1980-09-02 00:00:00', '2014-01-01 00:00:00', '1');
INSERT INTO `hs_user` VALUES ('20', 'fdasfffffffffff', '2', 'dfsafffffffffffffffff', 'fdsafffffffffffffffffffffffffff', '2014-01-01 00:00:00', '2014-01-09 00:00:00', '1');
INSERT INTO `hs_user` VALUES ('21', 'fdsafdsa', '1', '的发的萨芬的撒', '发大水范德萨范德萨', '2013-12-10 00:00:00', '2014-01-23 00:00:00', '1');
INSERT INTO `hs_user` VALUES ('22', '平潭阿健', '1', '机械设计与自动化', '高级程序猿', '1980-01-15 00:00:00', '2014-01-08 00:00:00', '1');
INSERT INTO `hs_user` VALUES ('23', 'John', '1', '11', '111', '2014-01-02 00:00:00', '2014-01-14 00:00:00', '1');
INSERT INTO `hs_user` VALUES ('24', 'Cindy', '2', '幼稚园', '班长', '1990-01-10 00:00:00', '2014-01-08 00:00:00', '1');
INSERT INTO `hs_user` VALUES ('25', '天天', '1', '调度', '打法是否', '2014-01-02 00:00:00', '2014-01-15 00:00:00', '1');
INSERT INTO `hs_user` VALUES ('26', '高胡', '1', '麻将科学', '高级技工', '2014-01-02 00:00:00', '2014-01-16 00:00:00', '1');
INSERT INTO `hs_user` VALUES ('27', 'Kimi', '1', '麻豆', '车手', '2013-11-06 00:00:00', '2014-01-08 00:00:00', '1');
