// import dependancies in the  router files
const express=require("express");
const router=express();
const multer = require("multer");
const adminControllers=require("../controllers/admin_controllers");


// SET URL FOR ADDMIN PANNEL
router.get('/login',adminControllers.AdminLoginPage);
router.get('/index',adminControllers.AdminIndexPage);
router.get('/category',adminControllers.CategoryPage);
router.get('/sub_category',adminControllers.SubCategoryPage);
router.get('/banner',adminControllers.BannerPage);
router.get('/state',adminControllers.StatePage);
router.get('/city',adminControllers.CityPage);
router.get('/area',adminControllers.AreaPage);
router.get('/express_delivery',adminControllers.ExpressDeliveryPage);
router.get('/delivery_time_slot',adminControllers.DeliveryTimeSlotPage);
router.get('/delivery_charge',adminControllers.DeliveryChargePage);
router.get('/product_list',adminControllers.ProductListPage);
router.get('/add_product',adminControllers.AddProductPage);
router.get('/promo_code',adminControllers.PromoCodePage);
router.get('/offer',adminControllers.OfferPage);
router.get('/order',adminControllers.OrderPage);
router.get('/customer_list',adminControllers.CustomerListPage);
router.get('/sales_report',adminControllers.SalesReportPage);

module.exports=router;