<template >
<div class="container text-center">
  <div class="grid-container">
    <div class="img">
      <img src="../assets/logo.png" alt="logo">
    </div>
    <div class="search">
      <div class="tags">
        <span>Tags:</span>
        <span v-for="(tag, id) in tags" :key="id" id="tag" class="m-1 badge-pill badge-dark" @click="remove(tag)">{{tag.name}}
        </span>
      </div>
      <form @submit.prevent="addToTags">
        <label for="newTag"></label>
        <small id="newTagHelp" class="form-text text-muted">Enter a new search tag:</small>
        <input type="text" class="form-control" id="newTag" v-model="newTerm">
      </form>
    </div>
    <div class="products">
      <!-- TODO:
        Only fire one content a time in each ShopCard - not all in each ...
     -->
      <ShopCard v-for="(content, x) in contents" :key="x" :content="content" />
    </div>
  </div>
  <!-- MODAL_OVERLAY -->
  <div class="modal-overlay" v-if="showModal" @click="showModal = false">

    <!-- MODAL -->
    <div class="modal" v-if="showModal">
      <h1>Lorem Ipsum</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem provident explicabo accusamus laudantium voluptatum nobis sed nesciunt neque possimus molestiae?</p>
      <button class="button" @click="showModal = true">
        Close Modal
      </button>
    </div>
  </div>
</div>
</template>


<script>
import ShopCard from './ShopCard.vue'
export default {
  name: 'Shop',
  components: {
    ShopCard
  },
  data() {
    // TODO: load new json in here and pass data to each shop card
    return {
      tags: [],
      newTerm: "",
      showModal: false,
      contents: [{
        "Handle": "clay-plant-pot",
        "Title": "Clay Plant Pot",
        "Body (HTML)": "<p>Classic blown clay pot for plants</p>",
        "Vendor": "Company 123",
        "Type": "Outdoor",
        "Tags": "Pot, Plants",
        "Published": true,
        "Option1 Name": "Size",
        "Option1 Value": "Regular",
        "Option2 Name": "",
        "Option2 Value": "",
        "Option3 Name": "",
        "Option3 Value": "",
        "Variant SKU": "",
        "Variant Grams": 0,
        "Variant Inventory Tracker": "",
        "Variant Inventory Qty": 1,
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "VariantPrice": 9.99,
        "Variant Compare At Price": "",
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Variant Barcode": "",
        "ImageSrc": "https://burst.shopifycdn.com/photos/single-sprout-in-a-pot_925x.jpg",
        "Image Position": 1,
        "Image Alt Text": "",
        "Gift Card": false,
        "SEO Title": "",
        "SEO Description": "",
        "Google Shopping / Google Product Category": "",
        "Google Shopping / Gender": "",
        "Google Shopping / Age Group": "",
        "Google Shopping / MPN": "",
        "Google Shopping / AdWords Grouping": "",
        "Google Shopping / AdWords Labels": "",
        "Google Shopping / Condition": "",
        "Google Shopping / Custom Product": "",
        "Google Shopping / Custom Label 0": "",
        "Google Shopping / Custom Label 1": "",
        "Google Shopping / Custom Label 2": "",
        "Google Shopping / Custom Label 3": "",
        "Google Shopping / Custom Label 4": "",
        "Variant Image": "",
        "Variant Weight Unit": "kg",
        "Variant Tax Code": "",
        "Cost per item": ""
      }, {
        "Handle": "copper-light",
        "Title": "Copper Light",
        "Body (HTML)": "<p>Stylish copper bedside light</p>",
        "Vendor": "Company 123",
        "Type": "Indoor",
        "Tags": "Copper, Bedroom",
        "Published": true,
        "Option1 Name": "Title",
        "Option1 Value": "Default Title",
        "Option2 Name": "",
        "Option2 Value": "",
        "Option3 Name": "",
        "Option3 Value": "",
        "Variant SKU": "",
        "Variant Grams": 0,
        "Variant Inventory Tracker": "",
        "Variant Inventory Qty": 2,
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "VariantPrice": 59.99,
        "Variant Compare At Price": 75,
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Variant Barcode": "",
        "ImageSrc": "https://burst.shopifycdn.com/photos/copper-light-in-bedroom_925x.jpg",
        "Image Position": 1,
        "Image Alt Text": "",
        "Gift Card": false,
        "SEO Title": "",
        "SEO Description": "",
        "Google Shopping / Google Product Category": "",
        "Google Shopping / Gender": "",
        "Google Shopping / Age Group": "",
        "Google Shopping / MPN": "",
        "Google Shopping / AdWords Grouping": "",
        "Google Shopping / AdWords Labels": "",
        "Google Shopping / Condition": "",
        "Google Shopping / Custom Product": "",
        "Google Shopping / Custom Label 0": "",
        "Google Shopping / Custom Label 1": "",
        "Google Shopping / Custom Label 2": "",
        "Google Shopping / Custom Label 3": "",
        "Google Shopping / Custom Label 4": "",
        "Variant Image": "",
        "Variant Weight Unit": "kg",
        "Variant Tax Code": "",
        "Cost per item": ""
      }, {
        "Handle": "cream-sofa",
        "Title": "Cream Sofa",
        "Body (HTML)": "<p>Comfortable cream sofa with wooden base</p>",
        "Vendor": "Company 123",
        "Type": "Indoor",
        "Tags": "Couch, Wood",
        "Published": true,
        "Option1 Name": "Title",
        "Option1 Value": "Default Title",
        "Option2 Name": "",
        "Option2 Value": "",
        "Option3 Name": "",
        "Option3 Value": "",
        "Variant SKU": "",
        "Variant Grams": 0,
        "Variant Inventory Tracker": "",
        "Variant Inventory Qty": 4,
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "VariantPrice": 500,
        "Variant Compare At Price": 750,
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Variant Barcode": "",
        "ImageSrc": "https://burst.shopifycdn.com/photos/condominium-interior-livingroom_925x.jpg",
        "Image Position": 1,
        "Image Alt Text": "",
        "Gift Card": false,
        "SEO Title": "",
        "SEO Description": "",
        "Google Shopping / Google Product Category": "",
        "Google Shopping / Gender": "",
        "Google Shopping / Age Group": "",
        "Google Shopping / MPN": "",
        "Google Shopping / AdWords Grouping": "",
        "Google Shopping / AdWords Labels": "",
        "Google Shopping / Condition": "",
        "Google Shopping / Custom Product": "",
        "Google Shopping / Custom Label 0": "",
        "Google Shopping / Custom Label 1": "",
        "Google Shopping / Custom Label 2": "",
        "Google Shopping / Custom Label 3": "",
        "Google Shopping / Custom Label 4": "",
        "Variant Image": "",
        "Variant Weight Unit": "kg",
        "Variant Tax Code": "",
        "Cost per item": ""
      }, {
        "Handle": "antique-drawers",
        "Title": "Antique Drawers",
        "Body (HTML)": "<p>Antique wooden chest of drawers</p>",
        "Vendor": "Company 123",
        "Type": "Indoor",
        "Tags": "Antique, Bedroom",
        "Published": true,
        "Option1 Name": "Title",
        "Option1 Value": "Default Title",
        "Option2 Name": "",
        "Option2 Value": "",
        "Option3 Name": "",
        "Option3 Value": "",
        "Variant SKU": "",
        "Variant Grams": 0,
        "Variant Inventory Tracker": "",
        "Variant Inventory Qty": 2,
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "VariantPrice": 250,
        "Variant Compare At Price": 300,
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Variant Barcode": "",
        "ImageSrc": "https://burst.shopifycdn.com/photos/babys-room_925x.jpg",
        "Image Position": 1,
        "Image Alt Text": "",
        "Gift Card": false,
        "SEO Title": "",
        "SEO Description": "",
        "Google Shopping / Google Product Category": "",
        "Google Shopping / Gender": "",
        "Google Shopping / Age Group": "",
        "Google Shopping / MPN": "",
        "Google Shopping / AdWords Grouping": "",
        "Google Shopping / AdWords Labels": "",
        "Google Shopping / Condition": "",
        "Google Shopping / Custom Product": "",
        "Google Shopping / Custom Label 0": "",
        "Google Shopping / Custom Label 1": "",
        "Google Shopping / Custom Label 2": "",
        "Google Shopping / Custom Label 3": "",
        "Google Shopping / Custom Label 4": "",
        "Variant Image": "",
        "Variant Weight Unit": "kg",
        "Variant Tax Code": "",
        "Cost per item": ""
      }, {
        "Handle": "white-bed-clothes",
        "Title": "White Bed Clothes",
        "Body (HTML)": "<p>Sleek white bed clothes</p>",
        "Vendor": "Company 123",
        "Type": "Indoor",
        "Tags": "Bed",
        "Published": true,
        "Option1 Name": "Title",
        "Option1 Value": "Default Title",
        "Option2 Name": "",
        "Option2 Value": "",
        "Option3 Name": "",
        "Option3 Value": "",
        "Variant SKU": "",
        "Variant Grams": 0,
        "Variant Inventory Tracker": "",
        "Variant Inventory Qty": 1,
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "VariantPrice": 29.99,
        "Variant Compare At Price": 35,
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Variant Barcode": "",
        "ImageSrc": "https://burst.shopifycdn.com/photos/bright-hotel-room-bed_925x.jpg",
        "Image Position": 1,
        "Image Alt Text": "",
        "Gift Card": false,
        "SEO Title": "",
        "SEO Description": "",
        "Google Shopping / Google Product Category": "",
        "Google Shopping / Gender": "",
        "Google Shopping / Age Group": "",
        "Google Shopping / MPN": "",
        "Google Shopping / AdWords Grouping": "",
        "Google Shopping / AdWords Labels": "",
        "Google Shopping / Condition": "",
        "Google Shopping / Custom Product": "",
        "Google Shopping / Custom Label 0": "",
        "Google Shopping / Custom Label 1": "",
        "Google Shopping / Custom Label 2": "",
        "Google Shopping / Custom Label 3": "",
        "Google Shopping / Custom Label 4": "",
        "Variant Image": "",
        "Variant Weight Unit": "kg",
        "Variant Tax Code": "",
        "Cost per item": ""
      }, {
        "Handle": "pink-armchair",
        "Title": "Pink Armchair",
        "Body (HTML)": "<p>Stylish pink armchair</p>",
        "Vendor": "Company 123",
        "Type": "Indoor",
        "Tags": "Chair",
        "Published": true,
        "Option1 Name": "Title",
        "Option1 Value": "Default Title",
        "Option2 Name": "",
        "Option2 Value": "",
        "Option3 Name": "",
        "Option3 Value": "",
        "Variant SKU": "",
        "Variant Grams": 0,
        "Variant Inventory Tracker": "",
        "Variant Inventory Qty": 0,
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "VariantPrice": 750,
        "Variant Compare At Price": "",
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Variant Barcode": "",
        "ImageSrc": "https://burst.shopifycdn.com/photos/soft-pink-cushioned-armchair-in-stately-salon_925x.jpg",
        "Image Position": "",
        "Image Alt Text": "",
        "Gift Card": false,
        "SEO Title": "",
        "SEO Description": "",
        "Google Shopping / Google Product Category": "",
        "Google Shopping / Gender": "",
        "Google Shopping / Age Group": "",
        "Google Shopping / MPN": "",
        "Google Shopping / AdWords Grouping": "",
        "Google Shopping / AdWords Labels": "",
        "Google Shopping / Condition": "",
        "Google Shopping / Custom Product": "",
        "Google Shopping / Custom Label 0": "",
        "Google Shopping / Custom Label 1": "",
        "Google Shopping / Custom Label 2": "",
        "Google Shopping / Custom Label 3": "",
        "Google Shopping / Custom Label 4": "",
        "Variant Image": "",
        "Variant Weight Unit": "kg",
        "Variant Tax Code": "",
        "Cost per item": ""
      }, {
        "Handle": "wooden-outdoor-table",
        "Title": "Wooden Outdoor Table",
        "Body (HTML)": "<p>Chic wooden outdoor garden table</p>",
        "Vendor": "Rustic LTD",
        "Type": "Outdoor",
        "Tags": "Wood, Garden",
        "Published": true,
        "Option1 Name": "Title",
        "Option1 Value": "Default Title",
        "Option2 Name": "",
        "Option2 Value": "",
        "Option3 Name": "",
        "Option3 Value": "",
        "Variant SKU": "",
        "Variant Grams": 0,
        "Variant Inventory Tracker": "",
        "Variant Inventory Qty": 3,
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "VariantPrice": 99.99,
        "Variant Compare At Price": "",
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Variant Barcode": "",
        "ImageSrc": "https://burst.shopifycdn.com/photos/cafe-patio_925x.jpg",
        "Image Position": 1,
        "Image Alt Text": "",
        "Gift Card": false,
        "SEO Title": "",
        "SEO Description": "",
        "Google Shopping / Google Product Category": "",
        "Google Shopping / Gender": "",
        "Google Shopping / Age Group": "",
        "Google Shopping / MPN": "",
        "Google Shopping / AdWords Grouping": "",
        "Google Shopping / AdWords Labels": "",
        "Google Shopping / Condition": "",
        "Google Shopping / Custom Product": "",
        "Google Shopping / Custom Label 0": "",
        "Google Shopping / Custom Label 1": "",
        "Google Shopping / Custom Label 2": "",
        "Google Shopping / Custom Label 3": "",
        "Google Shopping / Custom Label 4": "",
        "Variant Image": "",
        "Variant Weight Unit": "kg",
        "Variant Tax Code": "",
        "Cost per item": ""
      }, {
        "Handle": "brown-throw-pillows",
        "Title": "Brown Throw Pillows",
        "Body (HTML)": "<p>Stylish brown throw pillows</p>",
        "Vendor": "Rustic LTD",
        "Type": "Indoor",
        "Tags": "Pillows",
        "Published": true,
        "Option1 Name": "Title",
        "Option1 Value": "Default Title",
        "Option2 Name": "",
        "Option2 Value": "",
        "Option3 Name": "",
        "Option3 Value": "",
        "Variant SKU": "",
        "Variant Grams": 0,
        "Variant Inventory Tracker": "",
        "Variant Inventory Qty": 5,
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "VariantPrice": 19.99,
        "Variant Compare At Price": 25.99,
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Variant Barcode": "",
        "ImageSrc": "https://burst.shopifycdn.com/photos/bedroom-bed-with-brown-throw-pillows_925x.jpg",
        "Image Position": 1,
        "Image Alt Text": "",
        "Gift Card": false,
        "SEO Title": "",
        "SEO Description": "",
        "Google Shopping / Google Product Category": "",
        "Google Shopping / Gender": "",
        "Google Shopping / Age Group": "",
        "Google Shopping / MPN": "",
        "Google Shopping / AdWords Grouping": "",
        "Google Shopping / AdWords Labels": "",
        "Google Shopping / Condition": "",
        "Google Shopping / Custom Product": "",
        "Google Shopping / Custom Label 0": "",
        "Google Shopping / Custom Label 1": "",
        "Google Shopping / Custom Label 2": "",
        "Google Shopping / Custom Label 3": "",
        "Google Shopping / Custom Label 4": "",
        "Variant Image": "",
        "Variant Weight Unit": "kg",
        "Variant Tax Code": "",
        "Cost per item": ""
      }, {
        "Handle": "white-ceramic-pot",
        "Title": "White Ceramic Pot",
        "Body (HTML)": "<p>Homemade white ceramic flower pot</p>",
        "Vendor": "Rustic LTD",
        "Type": "Indoor",
        "Tags": "Pot, Plants",
        "Published": true,
        "Option1 Name": "Title",
        "Option1 Value": "Default Title",
        "Option2 Name": "",
        "Option2 Value": "",
        "Option3 Name": "",
        "Option3 Value": "",
        "Variant SKU": "",
        "Variant Grams": 0,
        "Variant Inventory Tracker": "",
        "Variant Inventory Qty": 1,
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "VariantPrice": 15.99,
        "Variant Compare At Price": 30,
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Variant Barcode": "",
        "ImageSrc": "https://burst.shopifycdn.com/photos/house-plant-in-white-pot_925x.jpg",
        "Image Position": 1,
        "Image Alt Text": "",
        "Gift Card": false,
        "SEO Title": "",
        "SEO Description": "",
        "Google Shopping / Google Product Category": "",
        "Google Shopping / Gender": "",
        "Google Shopping / Age Group": "",
        "Google Shopping / MPN": "",
        "Google Shopping / AdWords Grouping": "",
        "Google Shopping / AdWords Labels": "",
        "Google Shopping / Condition": "",
        "Google Shopping / Custom Product": "",
        "Google Shopping / Custom Label 0": "",
        "Google Shopping / Custom Label 1": "",
        "Google Shopping / Custom Label 2": "",
        "Google Shopping / Custom Label 3": "",
        "Google Shopping / Custom Label 4": "",
        "Variant Image": "",
        "Variant Weight Unit": "kg",
        "Variant Tax Code": "",
        "Cost per item": ""
      }, {
        "Handle": "yellow-watering-can",
        "Title": "Yellow watering can",
        "Body (HTML)": "<p>Vintage vibrant watering can</p>",
        "Vendor": "Rustic LTD",
        "Type": "Outdoor",
        "Tags": "Plants",
        "Published": true,
        "Option1 Name": "Title",
        "Option1 Value": "Default Title",
        "Option2 Name": "",
        "Option2 Value": "",
        "Option3 Name": "",
        "Option3 Value": "",
        "Variant SKU": "",
        "Variant Grams": 0,
        "Variant Inventory Tracker": "",
        "Variant Inventory Qty": 4,
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "VariantPrice": 40.99,
        "Variant Compare At Price": 50,
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Variant Barcode": "",
        "ImageSrc": "https://burst.shopifycdn.com/photos/flowers-in-yellow-watering-can_925x.jpg",
        "Image Position": 1,
        "Image Alt Text": "",
        "Gift Card": false,
        "SEO Title": "",
        "SEO Description": "",
        "Google Shopping / Google Product Category": "",
        "Google Shopping / Gender": "",
        "Google Shopping / Age Group": "",
        "Google Shopping / MPN": "",
        "Google Shopping / AdWords Grouping": "",
        "Google Shopping / AdWords Labels": "",
        "Google Shopping / Condition": "",
        "Google Shopping / Custom Product": "",
        "Google Shopping / Custom Label 0": "",
        "Google Shopping / Custom Label 1": "",
        "Google Shopping / Custom Label 2": "",
        "Google Shopping / Custom Label 3": "",
        "Google Shopping / Custom Label 4": "",
        "Variant Image": "",
        "Variant Weight Unit": "kg",
        "Variant Tax Code": "",
        "Cost per item": ""
      }, {
        "Handle": "gardening-hand-trowel",
        "Title": "Gardening hand trowel",
        "Body (HTML)": "<p>Metal gardening hand trowel with wooden handle</p>",
        "Vendor": "Rustic LTD",
        "Type": "Outdoor",
        "Tags": "Plants",
        "Published": true,
        "Option1 Name": "Title",
        "Option1 Value": "Default Title",
        "Option2 Name": "",
        "Option2 Value": "",
        "Option3 Name": "",
        "Option3 Value": "",
        "Variant SKU": "",
        "Variant Grams": 0,
        "Variant Inventory Tracker": "",
        "Variant Inventory Qty": 2,
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "VariantPrice": 10.99,
        "Variant Compare At Price": 25,
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Variant Barcode": "",
        "ImageSrc": "https://burst.shopifycdn.com/photos/spring-gardening-set-up_925x.jpg",
        "Image Position": 1,
        "Image Alt Text": "",
        "Gift Card": false,
        "SEO Title": "",
        "SEO Description": "",
        "Google Shopping / Google Product Category": "",
        "Google Shopping / Gender": "",
        "Google Shopping / Age Group": "",
        "Google Shopping / MPN": "",
        "Google Shopping / AdWords Grouping": "",
        "Google Shopping / AdWords Labels": "",
        "Google Shopping / Condition": "",
        "Google Shopping / Custom Product": "",
        "Google Shopping / Custom Label 0": "",
        "Google Shopping / Custom Label 1": "",
        "Google Shopping / Custom Label 2": "",
        "Google Shopping / Custom Label 3": "",
        "Google Shopping / Custom Label 4": "",
        "Variant Image": "",
        "Variant Weight Unit": "kg",
        "Variant Tax Code": "",
        "Cost per item": ""
      }, {
        "Handle": "biodegradable-cardboard-pots",
        "Title": "Biodegradable cardboard pots",
        "Body (HTML)": "<p>Biodegradable outdoor cardboard pots</p>",
        "Vendor": "Rustic LTD",
        "Type": "Outdoor",
        "Tags": "Garden, Plants",
        "Published": true,
        "Option1 Name": "Title",
        "Option1 Value": "Default Title",
        "Option2 Name": "",
        "Option2 Value": "",
        "Option3 Name": "",
        "Option3 Value": "",
        "Variant SKU": "",
        "Variant Grams": 0,
        "Variant Inventory Tracker": "shopify",
        "Variant Inventory Qty": 8,
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "VariantPrice": 10,
        "Variant Compare At Price": "",
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Variant Barcode": "",
        "ImageSrc": "https://burst.shopifycdn.com/photos/potted-seeds_925x.jpg",
        "Image Position": "",
        "Image Alt Text": "",
        "Gift Card": false,
        "SEO Title": "",
        "SEO Description": "",
        "Google Shopping / Google Product Category": "",
        "Google Shopping / Gender": "",
        "Google Shopping / Age Group": "",
        "Google Shopping / MPN": "",
        "Google Shopping / AdWords Grouping": "",
        "Google Shopping / AdWords Labels": "",
        "Google Shopping / Condition": "",
        "Google Shopping / Custom Product": "",
        "Google Shopping / Custom Label 0": "",
        "Google Shopping / Custom Label 1": "",
        "Google Shopping / Custom Label 2": "",
        "Google Shopping / Custom Label 3": "",
        "Google Shopping / Custom Label 4": "",
        "Variant Image": "",
        "Variant Weight Unit": "kg",
        "Variant Tax Code": "",
        "Cost per item": ""
      }, {
        "Handle": "grey-sofa",
        "Title": "Grey Sofa",
        "Body (HTML)": "<p>Large four seater grey sofa</p>",
        "Vendor": "Rustic LTD",
        "Type": "Indoor",
        "Tags": "Sofa",
        "Published": true,
        "Option1 Name": "Title",
        "Option1 Value": "Default Title",
        "Option2 Name": "",
        "Option2 Value": "",
        "Option3 Name": "",
        "Option3 Value": "",
        "Variant SKU": "",
        "Variant Grams": 0,
        "Variant Inventory Tracker": "",
        "Variant Inventory Qty": 6,
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "VariantPrice": 29.99,
        "Variant Compare At Price": 35,
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Variant Barcode": "",
        "ImageSrc": "https://burst.shopifycdn.com/photos/large-grey-sofa-by-brick-wall_925x.jpg",
        "Image Position": 1,
        "Image Alt Text": "",
        "Gift Card": false,
        "SEO Title": "",
        "SEO Description": "",
        "Google Shopping / Google Product Category": "",
        "Google Shopping / Gender": "",
        "Google Shopping / Age Group": "",
        "Google Shopping / MPN": "",
        "Google Shopping / AdWords Grouping": "",
        "Google Shopping / AdWords Labels": "",
        "Google Shopping / Condition": "",
        "Google Shopping / Custom Product": "",
        "Google Shopping / Custom Label 0": "",
        "Google Shopping / Custom Label 1": "",
        "Google Shopping / Custom Label 2": "",
        "Google Shopping / Custom Label 3": "",
        "Google Shopping / Custom Label 4": "",
        "Variant Image": "",
        "Variant Weight Unit": "kg",
        "Variant Tax Code": "",
        "Cost per item": ""
      }, {
        "Handle": "wooden-outdoor-slats",
        "Title": "Wooden outdoor slats",
        "Body (HTML)": "<p>Wooden outdoor fencing slats</p>",
        "Vendor": "Rustic LTD",
        "Type": "Outdoor",
        "Tags": "Wood, Garden",
        "Published": true,
        "Option1 Name": "Title",
        "Option1 Value": "Default Title",
        "Option2 Name": "",
        "Option2 Value": "",
        "Option3 Name": "",
        "Option3 Value": "",
        "Variant SKU": "",
        "Variant Grams": 0,
        "Variant Inventory Tracker": "",
        "Variant Inventory Qty": 0,
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "VariantPrice": 25.99,
        "Variant Compare At Price": 35,
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Variant Barcode": "",
        "ImageSrc": "https://burst.shopifycdn.com/photos/house-plant-on-wooden-slat-wall_925x.jpg",
        "Image Position": 1,
        "Image Alt Text": "",
        "Gift Card": false,
        "SEO Title": "",
        "SEO Description": "",
        "Google Shopping / Google Product Category": "",
        "Google Shopping / Gender": "",
        "Google Shopping / Age Group": "",
        "Google Shopping / MPN": "",
        "Google Shopping / AdWords Grouping": "",
        "Google Shopping / AdWords Labels": "",
        "Google Shopping / Condition": "",
        "Google Shopping / Custom Product": "",
        "Google Shopping / Custom Label 0": "",
        "Google Shopping / Custom Label 1": "",
        "Google Shopping / Custom Label 2": "",
        "Google Shopping / Custom Label 3": "",
        "Google Shopping / Custom Label 4": "",
        "Variant Image": "",
        "Variant Weight Unit": "kg",
        "Variant Tax Code": "",
        "Cost per item": ""
      }, {
        "Handle": "wooden-fence",
        "Title": "Wooden Fence",
        "Body (HTML)": "<p>Wooden garden fence</p>",
        "Vendor": "Rustic LTD",
        "Type": "Outdoor",
        "Tags": "Garden, Wood",
        "Published": true,
        "Option1 Name": "Title",
        "Option1 Value": "Default Title",
        "Option2 Name": "",
        "Option2 Value": "",
        "Option3 Name": "",
        "Option3 Value": "",
        "Variant SKU": "",
        "Variant Grams": 0,
        "Variant Inventory Tracker": "",
        "Variant Inventory Qty": 5,
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "VariantPrice": 200,
        "Variant Compare At Price": 300,
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Variant Barcode": "",
        "ImageSrc": "https://burst.shopifycdn.com/photos/picket-fence-flowers_925x.jpg",
        "Image Position": "",
        "Image Alt Text": "",
        "Gift Card": false,
        "SEO Title": "",
        "SEO Description": "",
        "Google Shopping / Google Product Category": "",
        "Google Shopping / Gender": "",
        "Google Shopping / Age Group": "",
        "Google Shopping / MPN": "",
        "Google Shopping / AdWords Grouping": "",
        "Google Shopping / AdWords Labels": "",
        "Google Shopping / Condition": "",
        "Google Shopping / Custom Product": "",
        "Google Shopping / Custom Label 0": "",
        "Google Shopping / Custom Label 1": "",
        "Google Shopping / Custom Label 2": "",
        "Google Shopping / Custom Label 3": "",
        "Google Shopping / Custom Label 4": "",
        "Variant Image": "",
        "Variant Weight Unit": "kg",
        "Variant Tax Code": "",
        "Cost per item": ""
      }, {
        "Handle": "yellow-sofa",
        "Title": "Yellow Sofa",
        "Body (HTML)": "<p>Two seater yellow sofa with wooden legs</p>",
        "Vendor": "Home Sweet Home",
        "Type": "Indoor",
        "Tags": "Sofa",
        "Published": true,
        "Option1 Name": "Title",
        "Option1 Value": "Default Title",
        "Option2 Name": "",
        "Option2 Value": "",
        "Option3 Name": "",
        "Option3 Value": "",
        "Variant SKU": "",
        "Variant Grams": 0,
        "Variant Inventory Tracker": "",
        "Variant Inventory Qty": 5,
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "VariantPrice": 99.99,
        "Variant Compare At Price": 150,
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Variant Barcode": "",
        "ImageSrc": "https://burst.shopifycdn.com/photos/yellow-couch-by-black-and-white-mural_925x.jpg",
        "Image Position": 1,
        "Image Alt Text": "",
        "Gift Card": false,
        "SEO Title": "",
        "SEO Description": "",
        "Google Shopping / Google Product Category": "",
        "Google Shopping / Gender": "",
        "Google Shopping / Age Group": "",
        "Google Shopping / MPN": "",
        "Google Shopping / AdWords Grouping": "",
        "Google Shopping / AdWords Labels": "",
        "Google Shopping / Condition": "",
        "Google Shopping / Custom Product": "",
        "Google Shopping / Custom Label 0": "",
        "Google Shopping / Custom Label 1": "",
        "Google Shopping / Custom Label 2": "",
        "Google Shopping / Custom Label 3": "",
        "Google Shopping / Custom Label 4": "",
        "Variant Image": "",
        "Variant Weight Unit": "kg",
        "Variant Tax Code": "",
        "Cost per item": ""
      }, {
        "Handle": "knitted-throw-pillows",
        "Title": "Knitted Throw Pillows",
        "Body (HTML)": "<p>Homemade knitted throw pillows in a variety of colors</p>",
        "Vendor": "Home Sweet Home",
        "Type": "Indoor",
        "Tags": "Pillows",
        "Published": true,
        "Option1 Name": "Title",
        "Option1 Value": "Default Title",
        "Option2 Name": "",
        "Option2 Value": "",
        "Option3 Name": "",
        "Option3 Value": "",
        "Variant SKU": "",
        "Variant Grams": 0,
        "Variant Inventory Tracker": "",
        "Variant Inventory Qty": 1,
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "VariantPrice": 19.99,
        "Variant Compare At Price": 25.99,
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Variant Barcode": "",
        "ImageSrc": "https://burst.shopifycdn.com/photos/yellow-sofa-with-throw-pillows_925x.jpg",
        "Image Position": 1,
        "Image Alt Text": "",
        "Gift Card": false,
        "SEO Title": "",
        "SEO Description": "",
        "Google Shopping / Google Product Category": "",
        "Google Shopping / Gender": "",
        "Google Shopping / Age Group": "",
        "Google Shopping / MPN": "",
        "Google Shopping / AdWords Grouping": "",
        "Google Shopping / AdWords Labels": "",
        "Google Shopping / Condition": "",
        "Google Shopping / Custom Product": "",
        "Google Shopping / Custom Label 0": "",
        "Google Shopping / Custom Label 1": "",
        "Google Shopping / Custom Label 2": "",
        "Google Shopping / Custom Label 3": "",
        "Google Shopping / Custom Label 4": "",
        "Variant Image": "",
        "Variant Weight Unit": "kg",
        "Variant Tax Code": "",
        "Cost per item": ""
      }, {
        "Handle": "vanilla-candle",
        "Title": "Vanilla candle",
        "Body (HTML)": "<p>Vanilla scent candle in jar</p>",
        "Vendor": "Home Sweet Home",
        "Type": "Indoor",
        "Tags": "Candle",
        "Published": true,
        "Option1 Name": "Title",
        "Option1 Value": "Default Title",
        "Option2 Name": "",
        "Option2 Value": "",
        "Option3 Name": "",
        "Option3 Value": "",
        "Variant SKU": "",
        "Variant Grams": 0,
        "Variant Inventory Tracker": "",
        "Variant Inventory Qty": 5,
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "VariantPrice": 15.99,
        "Variant Compare At Price": 30,
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Variant Barcode": "",
        "ImageSrc": "https://burst.shopifycdn.com/photos/diy-organic-candle_925x.jpg",
        "Image Position": 1,
        "Image Alt Text": "",
        "Gift Card": false,
        "SEO Title": "",
        "SEO Description": "",
        "Google Shopping / Google Product Category": "",
        "Google Shopping / Gender": "",
        "Google Shopping / Age Group": "",
        "Google Shopping / MPN": "",
        "Google Shopping / AdWords Grouping": "",
        "Google Shopping / AdWords Labels": "",
        "Google Shopping / Condition": "",
        "Google Shopping / Custom Product": "",
        "Google Shopping / Custom Label 0": "",
        "Google Shopping / Custom Label 1": "",
        "Google Shopping / Custom Label 2": "",
        "Google Shopping / Custom Label 3": "",
        "Google Shopping / Custom Label 4": "",
        "Variant Image": "",
        "Variant Weight Unit": "kg",
        "Variant Tax Code": "",
        "Cost per item": ""
      }, {
        "Handle": "black-bean-bag",
        "Title": "Black Beanbag",
        "Body (HTML)": "<p>Black leather beanbag</p>",
        "Vendor": "Company 123",
        "Type": "Indoor",
        "Tags": "Black, Leather",
        "Published": true,
        "Option1 Name": "Title",
        "Option1 Value": "Default Title",
        "Option2 Name": "",
        "Option2 Value": "",
        "Option3 Name": "",
        "Option3 Value": "",
        "Variant SKU": "",
        "Variant Grams": 0,
        "Variant Inventory Tracker": "",
        "Variant Inventory Qty": 6,
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "VariantPrice": 69.99,
        "Variant Compare At Price": 80,
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Variant Barcode": "",
        "ImageSrc": "https://burst.shopifycdn.com/photos/comfortable-living-room-cat_925x.jpg",
        "Image Position": 1,
        "Image Alt Text": "",
        "Gift Card": false,
        "SEO Title": "",
        "SEO Description": "",
        "Google Shopping / Google Product Category": "",
        "Google Shopping / Gender": "",
        "Google Shopping / Age Group": "",
        "Google Shopping / MPN": "",
        "Google Shopping / AdWords Grouping": "",
        "Google Shopping / AdWords Labels": "",
        "Google Shopping / Condition": "",
        "Google Shopping / Custom Product": "",
        "Google Shopping / Custom Label 0": "",
        "Google Shopping / Custom Label 1": "",
        "Google Shopping / Custom Label 2": "",
        "Google Shopping / Custom Label 3": "",
        "Google Shopping / Custom Label 4": "",
        "Variant Image": "",
        "Variant Weight Unit": "kg",
        "Variant Tax Code": "",
        "Cost per item": ""
      }, {
        "Handle": "bedside-table",
        "Title": "Bedside Table",
        "Body (HTML)": "<p>Wooden bedside table</p>",
        "Vendor": "Company 123",
        "Type": "Indoor",
        "Tags": "Wood, Bedroom",
        "Published": true,
        "Option1 Name": "Title",
        "Option1 Value": "Default Title",
        "Option2 Name": "",
        "Option2 Value": "",
        "Option3 Name": "",
        "Option3 Value": "",
        "Variant SKU": "",
        "Variant Grams": 0,
        "Variant Inventory Tracker": "",
        "Variant Inventory Qty": 1,
        "Variant Inventory Policy": "deny",
        "Variant Fulfillment Service": "manual",
        "VariantPrice": 69.99,
        "Variant Compare At Price": 85,
        "Variant Requires Shipping": true,
        "Variant Taxable": true,
        "Variant Barcode": "",
        "ImageSrc": "https://burst.shopifycdn.com/photos/dark-wall-bedside-table_925x.jpg",
        "Image Position": 1,
        "Image Alt Text": "",
        "Gift Card": false,
        "SEO Title": "",
        "SEO Description": "",
        "Google Shopping / Google Product Category": "",
        "Google Shopping / Gender": "",
        "Google Shopping / Age Group": "",
        "Google Shopping / MPN": "",
        "Google Shopping / AdWords Grouping": "",
        "Google Shopping / AdWords Labels": "",
        "Google Shopping / Condition": "",
        "Google Shopping / Custom Product": "",
        "Google Shopping / Custom Label 0": "",
        "Google Shopping / Custom Label 1": "",
        "Google Shopping / Custom Label 2": "",
        "Google Shopping / Custom Label 3": "",
        "Google Shopping / Custom Label 4": "",
        "Variant Image": "",
        "Variant Weight Unit": "kg",
        "Variant Tax Code": "",
        "Cost per item": ""
      }],
    }
  },
  methods: {
    addToTags() {
      this.tags.push({
        name: this.newTerm,
      });
      this.newTerm = '';
      // TODO: do not allow emtoy strings
    },
    remove(tag) {
      const tagIndex = this.tags.indexOf(tag);
      this.tags.splice(tagIndex, 1);
    },
  },
  watch: {
    tags() {
      localStorage.tags = JSON.stringify(this.tags);
      console.log("tags changed");
      // TODO: Here's gonna be the function watching tags to live update our search.
      // TODO: Clear localStorage on new search.
    }
  },
  mounted() {
    if (localStorage.tags) {
      this.tags = JSON.parse(localStorage.tags);
    }
  }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  gap: 1px 1px;
  grid-template-areas:
    "img tags"
    "img search"
    "img products";
  height: 95vh;
  margin-top: 2.5vh;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
  justify-content: space-around;
  border: 1px solid rgba(1, 1, 1, .1);
}

.img {
  grid-area: img;
  margin: auto;
  padding: 15px;
}

.tags {
  grid-area: tags;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  cursor: pointer;
  /* overflow-y: scroll; */
}

.search {
  grid-area: search;
  padding: 15px;
}

.products {
  grid-area: products;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;
  justify-content: space-evenly;
}

/* --------------MOADL STUFF-------------- */
.modal-overlay {
  grid-area: img, search, products, tags;
  width: 90%;
  height: 80%;
  top: 10%;
  margin: auto;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.3);
  border: 3px solid red;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%); */
  z-index: 3;
  width: 100;
  max-width: 400px;
  background-color: #FFF;
  padding: 25px;
  border: 5px solid green;
}

/* PHONE */
@media only screen and (max-width: 780px) {
  .container {
    display: flex;
    justify-content: space-evenly;
  }

  .grid-container {
    display: flex;
    flex-flow: row wrap;
    gap: 5px 1px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
    overflow-y: scroll;
  }

  .img {
    padding: 0px;
    width: auto;
  }

  .tags {
    overflow-y: hidden;
  }

  .search {
    padding: 15px;
    width: 100%;
  }

  .products {
    justify-content: space-evenly;
    overflow-y: hidden;
  }
}

/* TABLET >> DESKTOP*/
@media only screen and (min-width: 768px) {
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.3fr 0.3fr 2.1fr;
    gap: 1px 1px;
    grid-template-areas:
      "img tags"
      "img search"
      "products products";
    height: 95vh;
    margin-top: 2.5vh;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
    justify-content: space-around;
  }
}
</style>
