const loadImage = url => {
  return new Promise(function(resolve, reject) {
    //Open a new XHR
    var request = new XMLHttpRequest();
    request.open("GET", url, true);

    // When the request loads, check whether it was successful
    request.onload = function() {
      if (request.status === 200) {
        // If successful, resolve the promise
        resolve(request.response);
      } else {
        // Otherwise, reject the promise
        reject(
          Error(
            "An error occurred while loading image. error code:" +
              request.statusText
          )
        );
      }
    };

    request.send();
  });
};

const embedImage = url => {
  loadImage(url)
    .then(
      function(result) {
        return result;
        // console.log(result);
        // let imgS = document.querySelector(".ipeksi");
        // imgS.src = result;
        // const img = new Image();
        // var imageURL = this.URL.createObjectURL(result);
        // img.src = imageURL;
        // document.querySelector("body").appendChild(img);
      },
      function(err) {
        console.log(err);
      }
    )
    .then(res => {
      console.log(res);
    });
};

embedImage("https://source.unsplash.com/random");
