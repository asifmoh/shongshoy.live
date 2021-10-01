const settings = {
  "name": "new-app",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development",
      "headerlogo": "https://i0.wp.com/www.shongshoy.com/wp-content/uploads/2021/02/shongshoy_new_Logo_320.png?w=320&ssl=1"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "মূলপাতা",
              "/"
            ],
            [
              "প্রবন্ধ আর্কাইভ",
              "/archive-articles"
            ],
            [
              "তথ্য–ইসলাম",
              "references/islam"
            ],
            [
              "তথ্য–হিন্দু",
              "/references/hinduism"
            ],
            
            [
              "তথ্য–খ্রিস্ট",
              "/references/christianity"
            ],
            [
              "গ্রন্থাগার",
              "/library"
            ],
            [
              "নিয়মাবলী",
              "/about/terms-service-privacy-policy"
            ],

            [
              "নীতিমালা",
              "/rules"
            ],
            [
              "উত্তরসমূহ",
              "/faq"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://www.shongshoy.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/wp-comments"
  ]
};

export default settings;
