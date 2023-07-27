// import dependancies and models in controllers js files
//const Admin=require("../models/admin_models");

// show create admin login pages
const AdminLoginPage=(req,res)=>{
    res.render("login")
};

// show create admin login pages
const AdminIndexPage=(req,res)=>{
    res.render("index")
};

// show create admin login pages
const CategoryPage=(req,res)=>{
    res.render("category")
};

// show create admin login pages
const SubCategoryPage=(req,res)=>{
    res.render("sub_category")
};

// show create admin login pages
const BannerPage=(req,res)=>{
    res.render("banner")
};

// show create admin login pages
const StatePage=(req,res)=>{
    res.render("state")
};

// show create admin login pages
const CityPage=(req,res)=>{
    res.render("city")
};

// show create admin login pages
const AreaPage=(req,res)=>{
    res.render("area")
};

// show create admin login pages
const ExpressDeliveryPage=(req,res)=>{
    res.render("express_delivery")
};

// show create admin login pages
const DeliveryTimeSlotPage=(req,res)=>{
    res.render("delivery_time_slot")
};

// show create admin login pages
const DeliveryChargePage=(req,res)=>{
    res.render("delivery_charge")
};

// show create admin login pages
const ProductListPage=(req,res)=>{
    res.render("product_list")
};

// show create admin login pages
const AddProductPage=(req,res)=>{
    res.render("add_product")
};

// show create admin login pages
const PromoCodePage=(req,res)=>{
    res.render("promo_code")
};

// show create admin login pages
const OfferPage=(req,res)=>{
    res.render("offer")
};

// show create admin login pages
const OrderPage=(req,res)=>{
    res.render("order")
};

// show create admin login pages
const CustomerListPage=(req,res)=>{
    res.render("customer_list")
};

// show create admin login pages
const SalesReportPage=(req,res)=>{
    res.render("sales_report")
};

module.exports ={
   AdminLoginPage,
   AdminIndexPage,
   CategoryPage,
   SubCategoryPage,
   BannerPage,
   StatePage,
   CityPage,
   AreaPage,
   ExpressDeliveryPage,
   DeliveryTimeSlotPage,
   DeliveryChargePage,
   ProductListPage,
   AddProductPage,
   PromoCodePage,
   OfferPage,
   OrderPage,
   CustomerListPage,
   SalesReportPage
}