import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public list = [
    { img: 'https://www.foodlion.com/content/food-lion/in-our-community/food-lion-feeds/_jcr_content/mainParsys/imagewithrollover_co/image.adapt.full.high.jpg' },
    { img: 'https://img.webmd.com/dtmcms/live//webmd/consumer_assets/site_images/article_thumbnails/recipes/sizzling_summer_fish_tacos_recipe/650x350_sizzling_summer_fish_tacos_recipe.jpg?resize=650:*' },
    { img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1563551504%2Flemon-dill-salmon-pasta-salad-1907.jpg%3Fitok%3DFUN1eBWY' },
    { img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1563551838%2Fspice-rubbed-chicken-with-red-lentil-dal-1907.jpg%3Fitok%3Dt3qKYThM' },
    { img: 'https://images.heb.com/is/image/HEBGrocery/rcp-xlarge/crunchy-vegetable-and-pineapple-salad-recipe.jpg' },
    { img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1562879160%2Fspinach-quinoa-bowls-with-chicken-and-berries-1907.jpg%3Fitok%3DCj6HNyd_' },
    { img: 'https://ichef.bbci.co.uk/images/ic/832xn/p081mhg9.jpg'},
    { img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/img-8412-jpg-1555608325.jpg?crop=1.00xw:0.751xh;0,0.133xh&resize=480:*'},
    { img: 'https://patch.com/img/cdn20/shutterstock/23958638/20200421/045655/styles/patch_image/public/shutterstock-1527912476___21165641831.jpg'},
    { img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/img-9262-1576173348.jpg?crop=0.668xw:1.00xh;0.332xw,0&resize=480:*'},
    { img: 'https://d1q7fw5qeu4nx.cloudfront.net/wp-content/uploads/sites/2/2020/08/07142258/Pork-Scotch-Fillet-Stir-Fry-main-400x300.jpg'},
    { img: 'https://cdn.sanity.io/images/czqk28jt/prod_bk/f4dc27eb7337f7cbd12d3ccd840e6a031fcba622-360x270.jpg'},
    { img: 'https://dvh1deh6tagwk.cloudfront.net/finder-us/wp-uploads/2020/03/FamliyEatingVegetablesAtTable_Getty_450x250.jpg'},
    { img: 'https://kidsfoodfinder.org/kff/wp-content/uploads/2020/05/Kids-Food-Finder-1.png'},
    { img:'https://api.thelevelup.com/v15/order_ahead/menu_image_stores/70474/image?density=3&height=300&width=420'},
    { img:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F03%2Fmain%2Fquinoa-crusted-fish-nuggets-tartar-sauce-1705p64_2.jpg%3Fitok%3DB9y8xkgy'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
