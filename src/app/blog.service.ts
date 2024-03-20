import { Injectable } from '@angular/core';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogList: Blog[] = [
    {
      id: 0,
      title: "test blog",
      date: new Date(2023, 3, 15).toString(),
      content: "lorem ipsum",
      photo: "../../assets/images/blog.jpg"
    },
    {
      id: 1,
      title: "test blog 2",
      date: new Date(2023, 3, 15).toString(),
      content: "lorem ipsum",
      photo: "../../assets/images/blog.jpg"
    },
    {
      id: 2,
      title: "test blog 3",
      date: new Date(2023, 3, 15).toString(),
      content: `<p>I'm baby +1 godard taiyaki, pop-up migas tote bag sriracha ennui deep v letterpress blue bottle activated charcoal DIY. Cloud bread forage enamel pin, bodega boys activated charcoal semiotics snackwave. Squid meditation banjo selfies hexagon, seitan umami tbh. Fit franzen fingerstache jawn iceland organic mukbang kickstarter small batch cred pabst gastropub single-origin coffee DSA</p>
      <br/>
      <p>Cliche la croix tofu tumeric, JOMO chia gatekeep lo-fi. Wolf palo santo shaman solarpunk. Crucifix semiotics plaid, wolf butcher quinoa single-origin coffee brunch pop-up marxism tacos wayfarers tonx messenger bag. Ascot pour-over brunch letterpress bicycle rights</p>
      <br/>
      <p>Beard dreamcatcher grailed, 90's la croix crucifix man braid keytar shaman tilde direct trade occupy. Roof party irony fashion axe, praxis mlkshk pabst prism yr wayfarers direct trade fixie 8-bit unicorn gatekeep. Offal wayfarers lumbersexual migas photo booth woke. Pok pok shaman ugh tousled hexagon PBR&B sriracha street art viral drinking vinegar hashtag migas vegan roof party yuccie. Leggings mustache bruh fixie neutra, roof party Brooklyn freegan kale chips shoreditch iceland unicorn single-origin coffee lyft vinyl.</p>
      `,

      photo: "../../assets/images/blog.jpg"
    },
    {
      id: 3,
      title: "test blog 4",
      date: new Date(2023, 3, 15).toString(),
      content: `<p>I'm baby +1 godard taiyaki, pop-up migas tote bag sriracha ennui deep v letterpress blue bottle activated charcoal DIY. Cloud bread forage enamel pin, bodega boys activated charcoal semiotics snackwave. Squid meditation banjo selfies hexagon, seitan umami tbh. Fit franzen fingerstache jawn iceland organic mukbang kickstarter small batch cred pabst gastropub single-origin coffee DSA</p>
      <br/>
      <p>Cliche la croix tofu tumeric, JOMO chia gatekeep lo-fi. Wolf palo santo shaman solarpunk. Crucifix semiotics plaid, wolf butcher quinoa single-origin coffee brunch pop-up marxism tacos wayfarers tonx messenger bag. Ascot pour-over brunch letterpress bicycle rights</p>
      <br/>
      <p>Beard dreamcatcher grailed, 90's la croix crucifix man braid keytar shaman tilde direct trade occupy. Roof party irony fashion axe, praxis mlkshk pabst prism yr wayfarers direct trade fixie 8-bit unicorn gatekeep. Offal wayfarers lumbersexual migas photo booth woke. Pok pok shaman ugh tousled hexagon PBR&B sriracha street art viral drinking vinegar hashtag migas vegan roof party yuccie. Leggings mustache bruh fixie neutra, roof party Brooklyn freegan kale chips shoreditch iceland unicorn single-origin coffee lyft vinyl.</p>
      `,
      photo: "../../assets/images/blog.jpg"
    },
    {
      id: 4,
      title: "test blog 5",
      date: new Date(2023, 3, 15).toString(),
      content: `<p>I'm baby +1 godard taiyaki, pop-up migas tote bag sriracha ennui deep v letterpress blue bottle activated charcoal DIY. Cloud bread forage enamel pin, bodega boys activated charcoal semiotics snackwave. Squid meditation banjo selfies hexagon, seitan umami tbh. Fit franzen fingerstache jawn iceland organic mukbang kickstarter small batch cred pabst gastropub single-origin coffee DSA</p>
      <br/>
      <p>Cliche la croix tofu tumeric, JOMO chia gatekeep lo-fi. Wolf palo santo shaman solarpunk. Crucifix semiotics plaid, wolf butcher quinoa single-origin coffee brunch pop-up marxism tacos wayfarers tonx messenger bag. Ascot pour-over brunch letterpress bicycle rights</p>
      <br/>
      <p>Beard dreamcatcher grailed, 90's la croix crucifix man braid keytar shaman tilde direct trade occupy. Roof party irony fashion axe, praxis mlkshk pabst prism yr wayfarers direct trade fixie 8-bit unicorn gatekeep. Offal wayfarers lumbersexual migas photo booth woke. Pok pok shaman ugh tousled hexagon PBR&B sriracha street art viral drinking vinegar hashtag migas vegan roof party yuccie. Leggings mustache bruh fixie neutra, roof party Brooklyn freegan kale chips shoreditch iceland unicorn single-origin coffee lyft vinyl.</p>
      `,


      photo: "../../assets/images/blog.jpg"
    },
    {
      id: 5,
      title: "test blog 6",
      date: new Date(2023, 3, 15).toString(),
      content: `<p>I'm baby +1 godard taiyaki, pop-up migas tote bag sriracha ennui deep v letterpress blue bottle activated charcoal DIY. Cloud bread forage enamel pin, bodega boys activated charcoal semiotics snackwave. Squid meditation banjo selfies hexagon, seitan umami tbh. Fit franzen fingerstache jawn iceland organic mukbang kickstarter small batch cred pabst gastropub single-origin coffee DSA</p>
      <br/>
      <p>Cliche la croix tofu tumeric, JOMO chia gatekeep lo-fi. Wolf palo santo shaman solarpunk. Crucifix semiotics plaid, wolf butcher quinoa single-origin coffee brunch pop-up marxism tacos wayfarers tonx messenger bag. Ascot pour-over brunch letterpress bicycle rights</p>
      <br/>
      <p>Beard dreamcatcher grailed, 90's la croix crucifix man braid keytar shaman tilde direct trade occupy. Roof party irony fashion axe, praxis mlkshk pabst prism yr wayfarers direct trade fixie 8-bit unicorn gatekeep. Offal wayfarers lumbersexual migas photo booth woke. Pok pok shaman ugh tousled hexagon PBR&B sriracha street art viral drinking vinegar hashtag migas vegan roof party yuccie. Leggings mustache bruh fixie neutra, roof party Brooklyn freegan kale chips shoreditch iceland unicorn single-origin coffee lyft vinyl.</p>
      `,
      photo: "../../assets/images/blog.jpg"
    },
    {
      id: 6,
      title: "test blog 7",
      date: new Date(2023, 3, 15).toString(),
      content: `<p>I'm baby +1 godard taiyaki, pop-up migas tote bag sriracha ennui deep v letterpress blue bottle activated charcoal DIY. Cloud bread forage enamel pin, bodega boys activated charcoal semiotics snackwave. Squid meditation banjo selfies hexagon, seitan umami tbh. Fit franzen fingerstache jawn iceland organic mukbang kickstarter small batch cred pabst gastropub single-origin coffee DSA</p>
      <br/>
      <p>Cliche la croix tofu tumeric, JOMO chia gatekeep lo-fi. Wolf palo santo shaman solarpunk. Crucifix semiotics plaid, wolf butcher quinoa single-origin coffee brunch pop-up marxism tacos wayfarers tonx messenger bag. Ascot pour-over brunch letterpress bicycle rights</p>
      <br/>
      <p>Beard dreamcatcher grailed, 90's la croix crucifix man braid keytar shaman tilde direct trade occupy. Roof party irony fashion axe, praxis mlkshk pabst prism yr wayfarers direct trade fixie 8-bit unicorn gatekeep. Offal wayfarers lumbersexual migas photo booth woke. Pok pok shaman ugh tousled hexagon PBR&B sriracha street art viral drinking vinegar hashtag migas vegan roof party yuccie. Leggings mustache bruh fixie neutra, roof party Brooklyn freegan kale chips shoreditch iceland unicorn single-origin coffee lyft vinyl.</p>
      `,

      photo: "../../assets/images/blog.jpg"
    },
    {
      id: 7,
      title: "test blog 8",
      date: new Date(2023, 3, 15).toString(),
      content: `<p>I'm baby +1 godard taiyaki, pop-up migas tote bag sriracha ennui deep v letterpress blue bottle activated charcoal DIY. Cloud bread forage enamel pin, bodega boys activated charcoal semiotics snackwave. Squid meditation banjo selfies hexagon, seitan umami tbh. Fit franzen fingerstache jawn iceland organic mukbang kickstarter small batch cred pabst gastropub single-origin coffee DSA</p>
      <br/>
      <p>Cliche la croix tofu tumeric, JOMO chia gatekeep lo-fi. Wolf palo santo shaman solarpunk. Crucifix semiotics plaid, wolf butcher quinoa single-origin coffee brunch pop-up marxism tacos wayfarers tonx messenger bag. Ascot pour-over brunch letterpress bicycle rights</p>
      <br/>
      <p>Beard dreamcatcher grailed, 90's la croix crucifix man braid keytar shaman tilde direct trade occupy. Roof party irony fashion axe, praxis mlkshk pabst prism yr wayfarers direct trade fixie 8-bit unicorn gatekeep. Offal wayfarers lumbersexual migas photo booth woke. Pok pok shaman ugh tousled hexagon PBR&B sriracha street art viral drinking vinegar hashtag migas vegan roof party yuccie. Leggings mustache bruh fixie neutra, roof party Brooklyn freegan kale chips shoreditch iceland unicorn single-origin coffee lyft vinyl.</p>
      `,


      photo: "../../assets/images/blog.jpg"
    },
    {
      id: 8,
      title: "test blog 9",
      date: new Date(2023, 3, 15).toString(),
      content: `<p>I'm baby +1 godard taiyaki, pop-up migas tote bag sriracha ennui deep v letterpress blue bottle activated charcoal DIY. Cloud bread forage enamel pin, bodega boys activated charcoal semiotics snackwave. Squid meditation banjo selfies hexagon, seitan umami tbh. Fit franzen fingerstache jawn iceland organic mukbang kickstarter small batch cred pabst gastropub single-origin coffee DSA</p>
      <br/>
      <p>Cliche la croix tofu tumeric, JOMO chia gatekeep lo-fi. Wolf palo santo shaman solarpunk. Crucifix semiotics plaid, wolf butcher quinoa single-origin coffee brunch pop-up marxism tacos wayfarers tonx messenger bag. Ascot pour-over brunch letterpress bicycle rights</p>
      <br/>
      <p>Beard dreamcatcher grailed, 90's la croix crucifix man braid keytar shaman tilde direct trade occupy. Roof party irony fashion axe, praxis mlkshk pabst prism yr wayfarers direct trade fixie 8-bit unicorn gatekeep. Offal wayfarers lumbersexual migas photo booth woke. Pok pok shaman ugh tousled hexagon PBR&B sriracha street art viral drinking vinegar hashtag migas vegan roof party yuccie. Leggings mustache bruh fixie neutra, roof party Brooklyn freegan kale chips shoreditch iceland unicorn single-origin coffee lyft vinyl.</p>
      `,
      photo: "../../assets/images/blog.jpg"
    },
  ]
  constructor() { }


  getAll(): Blog[] {
    return this.blogList;
  }

  getBlogById(id: number): Blog | undefined {
    return this.blogList.find(blog => blog.id === id);
  }
}
