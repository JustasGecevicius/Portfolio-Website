export const ProjectsObject = () => {

  let projectsObject = {
    AdminDash: {
      name:"Admin Dashboard",
      pictures: {
        "AdminDash.png": "/static/media/AdminDash.0073557163b057c2ab3c.png",
        "AdminDash2.png": "/static/media/AdminDash2.51add96c529900daeedd.png",
      },
      description: {
        p: "This Project was focused on learning the ins and outs of the layouts of a website, how to control overflows and several animations, The blue color choice slighty resembles that of twitters and makes it look professional. Icons and fonts are kept similar across the whole website for consistency",
        technologies: ["HTML", "CSS", "Javascript"],
      },
      link:"https://zebaginas.github.io/AdminDashboard/",
    },
    Calc: {
        name:"Calculator",
      pictures: {
        "Calc.png": "/static/media/Calc.96d9a41ea19687fd58ac.png",
        
      },
      description: {
        p: "This Project was focused on implementing the functionality of Javascript into my projects, anticipate edge cases and unexpected user inputs",
        technologies: ["HTML", "CSS", "Javascript"],
      },
      link:"https://zebaginas.github.io/calculator/",
    },
    Ecommerce: {
        name:"E-commerce Website",
      pictures: {
        "Ecommerce.png": "/static/media/Ecommerce.b10950fb675d6ba91230.png",
        "Ecommerce1.png": "/static/media/Ecommerce1.7124d4e7149018167231.png",
        "Ecommerce2.png": "/static/media/Ecommerce2.4c9a07be9cf638acebe1.png",
      },
      description: {
        p: "So far this is one of my biggest projects, I started this project to teach myself react-router-dom, state management, state uplifting and several other React Concepts",
        technologies: ["HTML", "CSS", "Javascript", "React", "Webpack", "react-router-dom"],
      },
      link:"",
    },
    Etch: {
        name:"Etch-a-Sketch",
      pictures: {
        "Etch.png": "/static/media/Etch.65fbed7ddb5a259a0f03.png",
        "Etch1.png": "/static/media/Etch1.b34c14c5251887257386.png",
      },
      description: {
        p: "This Project was one of my first projects, it was focused on learning how to update the DOM after changes were made, automate the process of element creation through the use of various loops/functions and the interaction between user and the Website",
        technologies: ["HTML", "CSS", "Javascript"]
      },
      link:"https://zebaginas.github.io/etch/",
    },
    MemoryGame: {
        name:"Pokemon Memory Game",
      pictures: {
        "MemoryGame.png": "/static/media/MemoryGame.9d1c8cfd7fa43dc73896.png",
      },
      description: {
        p: "This Project was one of my first projects made with React, It focused on state management and how different states interact with each other, for example the number of images displayed in relation to the level or checking whether the image was clicked already",
        technologies: ["HTML", "CSS", "Javascript", "Webpack", "React"]
      },
      link:"",
    },
    RPS: {
        name:"Rock-Paper-Scissors",
      pictures: {
        "RPS.png": "/static/media/RPS.e0000ed35d68266305a8.png",
        "RPS1.png": "/static/media/RPS1.0a695b492c0cb6227afc.png",
      },
      description: {
        p: "This project was focused on evaluation of conditions, tracking the current state of the game and updating the DOM",
        technologies: ["HTML", "CSS", "Javascript"],
      },
      link:"https://zebaginas.github.io/rockpaperscissors/",
    },
    Restaurant: {
        name:"Mock Restaurant",
      pictures: {
        "Restaurant.png": "/static/media/Restaurant.6909277315b30e900820.png",
        "Restaurant1.png": "/static/media/Restaurant1.6e27c10d2e5d89bb69d9.png",
      },
      description: {
        p: "This Project was focused more on the design and appearance of the website rather than the technical aspects, The website is optimised for both computer and phone use, the website has a consistent theme across all pages",
        technologies: ["HTML", "CSS", "Javascript"]
      },
      link:"https://zebaginas.github.io/Restaurant-page-webpack-for-publication/",
    },

    TTT: {
        name:"Tic-Tac-Toe",
      pictures: {
        "TTT.png":
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWAAAAEsCAYAAAD9+2lbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABM7SURBVHhe7d1LaBTZHsfx4wNbkQjqQkVBQQSzURAk4qMVEd1NdBEVZJRZjNHxESTgIuLCx4zZTVSiDjPoIraPhQs3go5RHFwoKAiRqCC6ihMlE5lM1PhI6va/7qk2aHU6ne7O/1T5/cC5mTpd1j3/buuXsup01QgvzQAAht1I+xMAMMwIYABQQgADgBICGACUEMAAoIQABgAlBDAAKCGAAUAJAQwASghgAFBCAAOAEgIYAJQQwACghAAGACUEMAAoIYABQAkBDABKCGAAUEIAA4ASAhgAlBDAAKCEAAYAJQQwACghgAFACQEMAEoIYABQQgADgBICGACUEMAAoIQABgAlBDAAKCGAAUAJAQwASghgAFBCAAOAEgIYAJQQwACghAAGACUEMAAoIYABQAkBDABKCGAAUEIAA4ASAhgAlBDAAKCEAAYAJQQwACghgAFACQEMAEoIYABQQgADgBICGACUEMAAoIQABgAlBDAAKCGAAUAJAQwASghgAFBCAAOAEgIYAJQQwACghAAGACUEMAAoIYABQAkBDABKCGAAUEIAA4ASAhgAlBDAAKCEAFZ27tw5s3z5cjN27FgzYsQIp5uMUcYqYx4INem2wdYEB3hQU1tb68lHEMUmYw9DTW61bDXBDQSwklQqldlJGhsbva6uLvuKu2SMMtZg3FJDf9Tkhlw1wR0EsJJkMpnZqaMm2Lmlhv6oyS3ZaoI7Rsj/pD8kDDM5T/f+/XuTPloxZWVltjca/vvvPzNhwgSTSCRMT0+P7aUm12SrCe4ggJXIxRIR1bc/bPzU5J6ojz/umAUBAEoIYABQQgADgBICGACUEMAAoIQABgAlBDAAKCGAAUAJAQwASghgAFBCAEdYX1+fuX79ulm1apX/ldO5c+eao0ePmjdv3tg1/v8V1Fu3bpl169b59wWQderr601nZ6ddwy1xrCnMixcvTF1dnZk1a5Zfp9R76dIl/74T+Iak/zJDgbz1hbz96aDybzNYVlaW2VbQtmzZ4nV0dAy4TmVlpdfe3m63lr9gO/2F9eUjjjWFaW1t9SoqKjLb7t9qamq87u5uu2bhgu3CTXwySgrdMZ49e5Z1J5bW0NDgtbS0eOXl5aGvSzt+/LjdWv6CbfQX1pePONb0pbdv33rV1dWZ7Ya19JGwXbtwwTbhJk5BRNTTp0/N3bt37dLXLl++bE6ePGkePXpke7728OFD8+7dO7ukL441famtrc3cu3fPLoW7ffu2+fDhg11CnBHAEZUrZG7evGlOnDhhl6IhjjV9qbe313z69MkuhZPzwHIuHPFHAEeUXLyZM2eOXRqaGTNm+Dccd0Uca/rS1KlTc9a4YMECp2tA8RDAETV79myzZMkSu5S/adOmmdWrV2du2O2CONYkR7sXLlwwixYt8n/BHDhwwCxcuDDr0zUqKir80w/JZNKf4bF+/Xrz4MED+ypix54LxjCTt77Qt//WrVteOnQy28qnyYUguSA0VMF2+gvry1ecahpoxkY+TS5MysyJoQi2ATdxBBxhixcvNjU1NXZp8ObPn+//uXHjxtked8SppnRomsOHD/vPZiuEXJg8deoUc4RjiACOsNGjR5utW7eaqqoq25Ob/NN37969/pcXXBSnmmRGxkAzNvIhMyfa29vtEuKCAI64iRMn+ucV5dzhYOzatcs/r+jSedIvxaWmXLMd8iHfBOTJxvFDAMdAeXm5OXjwYM7HpldWVprdu3f7R5mui0NNucYu5NTJhg0bzMyZM21POPmlNJjtIVoI4JhYuXKl2bdvn136mhxNHjlyxEyZMsX2uC/qNc2bN2/AWR0SulLfsmXLzPbt221vOFknSp8dBslejMMwk7e+2G//v//+623evDmz7aDJrILm5ma7VnEE2+4vrK9QUa5JZkGcP3/emzRpUmY7QZM+ee358+feoUOHvM7OTq+uru6r9aQVco+LYBtwE5+MklLtGGE3eqmvr/c+fvxo1yiOsPGH9RVDlGuSEL5//75XVVXlT0dLH/V6e/bs8YNXXLlyxVuxYoXX1tbm9fb2ejdu3PDWrl2bWTd9hOy9evXKX3coCh0/SotPRkmpdgzZ4ZuamjLbL/QOYdmEjT+srxjiWJOQGqQW2b7caEjqLLZSjh+F45NRUsodI/hnuxxFXb161fYWV9j4qWnw/vnnH+/HH3/MbF/q+uOPP7yenh67RnGUavwojhHyP+kPCMMsmDJVqrf/2rVr5uLFi+bYsWNm/Pjxtrd4wsZPTQPr7u42T548Mc3Nzebs2bOmpaXFvvLZmjVrzKZNm8zSpUvN9OnTzZgxY+wrQ1PqzwSFIYCVlHrH6OjoMI8fP/Z35FIodViFiXJNd+7c8e9Tkc+34iSMU6mUmTx5su3JX6k/ExSGAFZS6h1Dtitt5MjSzDQsZVhlE8eaSi3q44875gHHlOx4pQoqLXGsCd82/jYDgBICGACUEMAAoIQABgAlBDAAKCGAAUAJAQwASghgAFBCACtJJBL+z0If2KghGHNQQ4Ca3JKtJriDAFYSPO+sqanJ/xklwZiDGgLU5JZsNcEhHlSkUin5cr7fGhsbva6uLvuKu2SMMtZg3FJDf9Tkhlw1wR0EsKLa2trMThK1JmMPQ01utWw1wQ0EsDI5Okkmk14ikQjdgVxqMkYZa64jKmrSbYOtCfq4HSUAKOEiHAAoIYABQAkBrOzcuXNm+fLlZuzYsf4Nx11uMkYZq4x5INSk2wZbExzgnwmGCmYMuNW+pZrgBgJYiVyhDnYS5szq+RZrgjsIYCUyTSjYqaMm2Lmlhv6oyS3ZaoI7mIamRM7TvX//3qSPVkxZWZntjQa5x8CECRP8ewz09PTYXmpyTbaa4A4CWIlcLBFRffvDxk9N7on6+OOOWRAAoIQABgAlBDAAKCGAAUAJAQwASghgAFBCAAOAEgIYAJQQwACghAAGACUEcMy8ePHC1NXVmVmzZvlfQ121apW5dOmSfz+DKOjr6zPXr1/3xy3jnzt3rjl69Kh58+aNXeP/X6u9deuWWbdunX+vA1mnvr7edHZ22jWAiEj/ZYYCeeuL/fa3trZ6FRUVmW33bzU1NV53d7dds3DBdvsL68tHOnz9WyeWlZVlthW0LVu2eB0dHQOuU1lZ6bW3t9ut5S/YTn9hfVES9fHHHZ+MkmLvGG/fvvWqq6sz2w1r6SNhu3bhgm32F9aXj2fPnmX9BSKtoaHBa2lp8crLy0Nfl3b8+HG7tfwF2+gvrC9Koj7+uOMUREy0tbWZe/fu2aVwt2/fNh8+fLBL7nn69Km5e/euXfra5cuXzcmTJ82jR49sz9cePnxo3r17Z5cAtxHAMdHb22s+ffpkl8LJeWA5x+qqXMF58+ZNc+LECbsERB8BHBNTp041c+bMsUvhFixY4N9g3FVy4TBXDbnMmDHD6RqB/gjgiJKj3QsXLphFixb5wXXgwAGzcOHCrE9tqKio8E8/JJNJf+bA+vXrzYMHD+yrbpg9e7ZZsmSJXcrftGnTzOrVqzM3IQdcxxMxlBTypAL5M+fPnzfbtm3zHzszVBLKZ86cMeXl5bZn8MLGX0hNgb/++sts3LjR/P3337Zn8Kqrq82vv/5qxo0bZ3vyU6qaNEV9/HHHEXAEtba2msOHDxcUvkIueJ06dcqpOcKLFy82NTU1dmnw5s+f7/+5oYYvoIEAjiC50j/QTIB8yMyJ9vZ2u6Rv9OjRZuvWraaqqsr25CanXfbu3et/IQOIEgI4gnLNdsiHfMPMtSfmTpw40T+nLadIBmPXrl3+Oe3gn9tAVBDAETSYx6PLP8k3bNhgZs6caXvCSdgNZnvDTc5LHzx4MOfYKisrze7du/0jZyBqCOAImjdv3oCzBSR09+3bZ5YtW2a2b99ue8PJOlOmTLFLblm5cqVfRzZyhHzkyBFnxw/kQgBHkATszp07zaRJk2zPZ9InN6aRKWmvX7/2z6fKzXnCyNHjjh07zKhRo2yPW+SoVn6BbN682fZ8JlPOfvnllyHN4ACc4UGFvPWFvP1yU5r79+97VVVV/o1p0qHs7dmzx3v+/Ln/+pUrV7wVK1Z4bW1tXm9vr3fjxg1v7dq1mXXTR5beq1ev/HWHImz8hdaUTdhNhtK/ZLyPHz/aNYojbPxhfVES9fHHHfOAlZRyfubLly/9ObFy74SGhgb/HGmxL1CFjb9UNcn2UqmU+f777/1lOXL/7bffin7qYThrGi5RH3/ccQoiZuSeuPv37/fDV8h/nz59OjL3Aw4jIfLdd9/5pyLkotxPP/3EeV/EAkfASop5ZNLd3W2ePHlimpubzdmzZ01LS4t95bM1a9aYTZs2maVLl5rp06ebMWPG2FeGRuNo8dq1a+bixYvm2LFjZvz48ba3eDRqKrWojz/uCGAlxdox7ty549//IJ9vxUkYyz/pJ0+ebHvypxFWHR0d5vHjx/4vkVLQqKnUoj7+uCOAlcRxxy51TbJdaSNHlubMmUZNpRb18ccd54ARGRImpQpfQAN/mwFACQEMAEoIYABQQgADgBICGACUEMAAoIQABgAlBDAAKCGAlSQSCf9noQ/W1BCMOaghQE1uyVYT3EEAKwmed9bU1OT/jJJgzF8+s42a3JKtJjjEg4pUKiVfzvdbY2Oj19XVZV9xl4xRxhqMW2roj5rckKsmuIMAVlRbW5vZSaLWZOxhqMmtlq0muIEAViZHJ8lk0kskEqE7kEtNxihjzXVERU26bbA1QR+3owQAJVyEAwAlBDAAKCGAlZ07d84sX77cjB071r/huMtNxihjlTEPhJp022BrggP8M8FQwYwBt9q3VBPcQAArkSvUwU7CnFk932JNcAcBrESmCQU7ddQEO7fU0B81uSVbTXAH09CUyHm69+/fm/TRiikrK7O90SD3GJgwYYJ/j4Genh7bS02uyVYT3EEAK5GLJSKqb3/Y+KnJPVEff9wxCwIAlBDAAKCEAAYAJQQwACghgAFACQEMAEoIYABQQgADgBICGACUEMAAoIQABhS8ePHC1NXVmVmzZvlfF161apW5dOmSf98JfDu4F4QS7pvgnuGq6dGjR+aHH34wd+/etT2f1dTUmJ9//tmMHz/e9hQm6p9J3HEEDAyjd+/emaNHj4aGr5DXrl69apcQdwQwMIza2trMvXv37FK427dvmw8fPtglxBkBDAyj3t5e8+nTJ7sUTs4D9/X12SXEGQEMDKOpU6eaOXPm2KVwCxYs8G8Ej/gjgIESkqPdCxcumEWLFvkzHg4cOGAWLlyY9ekaFRUV/umHZDLpP81i/fr15sGDB/ZVxA2zIJQwY8A9xa5J/sz58+fNtm3b/McDDZWE8pkzZ0x5ebntGbyofyZxxxEwUCKtra3m8OHDBYWvkBkTp06dYo5wDBHAQIk8fPjQn/NbDDJzor293S4hLghgoERyzXbIx5s3b3iycQwRwECJDOYx9vPnzzcbNmwwM2fOtD3hJk6cGLnH4iM3AhgokXnz5pklS5bYpa9J6O7bt88sW7bMbN++3faGk3WmTJlilxAXBDBQIhKwO3fuNJMmTbI9n0lffX29PyXt9evXZuvWrf7NecJUVlaaHTt2mFGjRtkexAUBDJSITAGT0wt//vmnqaqq8k8hSCjv2bPH3L9/32zcuNG/SNfc3OzfI+LQoUPmxo0bZu3atZl15Qj5999/5+g3ppgHrIQ5s+4Z7ppevnxpqqurzeXLl01DQ4PZvXt35v+vWKL+mcQdR8CAgs7OTrN//34/fIX89+nTp5nr+43hCFgJR4vuKXVN3d3d5smTJ/4ph7Nnz5qWlhb7ymdr1qwxmzZtMkuXLjXTp083Y8aMsa8MTdQ/k7gjgJUQVu4pZU137twxq1evzutbcRLGqVTKTJ482fbkL+qfSdwRwEoIK/d8KzXBHZwDBgAlBDAAKCGAAUAJAQwASghgAFBCAAOAEgIYAJQQwACghAAGACUEsJJEIuH/LPSBjRqCMQc1BKjJLdlqgjsIYCXyqHHR1NTk/4ySYMxBDQFqcku2muAQDypSqZR8Od9vjY2NXldXl33FXTJGGWswbqmhP2pyQ66a4A4CWFFtbW1mJ4lak7GHoSa3Wraa4AYCWJkcnSSTSS+RSITuQC41GaOMNdcRFTXptsHWBH3cjhIAlHARDgCUEMAAoIQABgAlBDAAKCGAAUAJAQwASghgAFBCAAOAEgIYAJQQwACghAAGACUEMAAoIYABQAkBDABKCGAAUEIAA4ASAhgAlBDAAKCEAAYAJQQwACghgAFACQEMAEoIYABQQgADgBICGACUEMAAoIQABgAlBDAAKCGAAUAJAQwASghgAFBCAAOAEgIYAJQQwACghAAGACUEMAAoIYABQAkBDABKCGAAUEIAA4ASAhgAlBDAAKCEAAYAJQQwACghgAFACQEMAEoIYABQQgADgBICGACUEMAAoIQABgAlBDAAKCGAAUAJAQwASghgAFBCAAOAEgIYAJQQwACghAAGACUEMAAoIYABQAkBDABKCGAAUEIAA4ASAhgAlBDAAKCEAAYAJQQwACghgAFACQEMAEoIYABQQgADgBICGABUGPM/VZHUPDOqYhcAAAAASUVORK5CYII=",
      },
      description: {
        p: "This project similarly to the Rock-Paper-Scissors application focused on more complex evaluation of conditions, kept track of the turns, each players previous moves and has the functionality of playing against a computer",
        technologies: ["HTML", "CSS", "Javascript"]
      },
      link:"https://zebaginas.github.io/TicTacToe/",
    },
    Todo: {
        name:"To-Do App",
      pictures: {
        "Todo.png": "/static/media/Todo.08469021967f9d4ce74b.png",
        "Todo1.png": "/static/media/Todo1.8898f6d9ae0dd2cda0c2.png",
        "Todo2.png": "/static/media/Todo2.78a261228511d289a64c.png",
      },
      description: {
        p: "This was my biggest project made with purely HTML, CSS and Javascript. It is built to interact with a back-end provided by Firebase. It also keeps track of different users and their individual tasks",
        technologies: ["HTML", "CSS", "Javascript", "Firebase", "BAS (Back-end as a service)"],
      },
      link:"https://zebaginas.github.io/ToDoList-for-Publication/",
    },
  };

  return projectsObject;
};
