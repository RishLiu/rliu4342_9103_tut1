# rliu4342_9103_tut1

## Quiz 8

### 1. Imaging Technique Inspiration

I think **Gradient** would be a very useful technique for the major assignment, It can create a smooth transition between two or more colors, making the design more appealing to eyes. Gradients are commonly used as background elements in web design, graphic design, and user interfaces as the iphone's wallpaper shown in the example. In real life, there are many natural landscapes can also be abstrcted using gradient, such as sunrise, sunset, lakes, and seas like the second example.

![iphone's wallpaper](https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios-16-iphone-14-pro-home-scren-customize-edit.png)

![Visitors and colorful paddleboats line the shores of Lake Urmia, Iran](https://images.nationalgeographic.org/image/upload/v1652341580/EducationHub/photos/beachgoers-at-lake-urmia.jpg)


### 2. Coding Technique Exploration

The lerpColor(c1, c2, amt) function is useful for interpolating between two colors. It will find a third color to blend from color1 to color2, amt parameter specifies the amount to interpolate between the two values. In the example, the setGradient() function takes parameters for position (x, y), size (w, h), colors (c1, c2), and gradient axis (Y_AXIS or X_AXIS), and it uses a loop to create the gradient effect by interpolating colors between c1 and c2. The map() function is used to determine the interpolation point based on the current position.

![Linear Gradient](readmeImages/Linear%20Gradient.png)

[Linear Gradient Example](https://p5js.org/examples/color-linear-gradient.html)

[Vertical Gradient](https://happycoding.io/tutorials/p5js/for-loops/vertical-gradient)