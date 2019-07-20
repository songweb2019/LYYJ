#设置客户端连接的编码
SET NAMES UTF8;
#丢弃数据库
DROP DATABASE IF EXISTS lyyj;
#创建数据库
CREATE DATABASE lyyj CHARSET=UTF8;
#进入该数据库
USE lyyj;

#创建保存数据的表
/** 用户信息 **/
CREATE TABLE lyyj_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(11) NOT NULL,
  upwd VARCHAR(16),
  gender BOOL,
  birthday DATE,
  email VARCHAR(32),
  phone VARCHAR(11),
  user_name VARCHAR(32)   
);

/** 产品 **/
CREATE TABLE lyyj_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  ptitle VARCHAR(16),
  price DECIMAL(7,2)
);

#插入数据
/** 用户信息 **/
INSERT INTO lyyj_user VALUES
(NULL,'yiyi','123456',0,'2000-1-20','yiyi@qq.com','18790687250','依依'),
(NULL,'xiao','123456',1,'2000-2-20','xiao@qq.com','18790687251','李晓'),
(NULL,'long','123456',1,'2000-3-20','long@qq.com','18790687252','李龙'),
(NULL,'xixi','123456',0,'2000-4-20','xixi@qq.com','18790687253','兮兮');



/** 产品 **/
INSERT INTO lyyj_product VALUES
(NULL,'黑丝边框YST镜',299.00),
(NULL,'防蓝光文艺镜',198.00),
(NULL,'潮流光学近视镜',299.00),
(NULL,'复古ST光学镜',399.00),
(NULL,'Real Estate 休闲镜',399.00),
(NULL,'小黑边儿童镜',399.00),
(NULL,'炫彩偏光太阳镜',399.00),
(NULL,'IT·S 太阳镜',399.00);

