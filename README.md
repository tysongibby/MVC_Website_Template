# MVC Website Template
Marketing Website Code Template

MVC.NET Code template for a marketing website.

How to use: clone the project to your own repository. Each view will have viewbag parameters at the top of the view file that allow you to easily customize the main parts of the page. Other parts can be quickly customized by chaing the partial files for the different components. 

The page parameters are placed on the views instead of the controllers. This allows for them to be referenced from one place. If the parameters were located in the controller then every controller referencing the view would need to include the parameters.
