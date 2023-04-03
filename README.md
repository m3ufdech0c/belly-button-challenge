# belly-button-challenge

In this assignment, we will build an interactive dashboard to explore the Belly Button Biodiversity dataset ("http://robdunnlab.com/projects/belly-button-biodiversity/"), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

I have collaborated with my classmate Christpher Sharber on this challenge.

URL for that contains the sample data is as follow;
"https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"


First we will write an 'init()' function and select the html element on the page for the dropdown

We will then initialize the chart with the first value of the selection
    
Next, we write a function to build the charts where the argument of the function is a name representing ids. Looking at the 'samples' section of the data and we filter according to 
the passed argument to create the variables out of the data to be used in the charts
       
Then we create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
        
Similarly we create a bubble chart that displays each sample. 

Next we would to display the sample metadata, i.e., an individual's demographic information, and in order to do so we will write a function to build Demographic info section

Finally we will call a function that will fetch new data each time a new sample is selected.

The link to my deployment is:
https://m3ufdech0c.github.io/belly-button-challenge/
