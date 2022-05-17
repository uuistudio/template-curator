function parse(post){
  return (
    {
      imagebox: {
        title: post.title,
        image: {
          src: post.image,
        },
      },
      infobox: {
        title: post.title,
        classx: "text-sm font-medium text-white pb-4",
        items: [
          {
            href: "/",
            image: {
              src: post.authors[0].image,
              alt: post.authors[0].name,
            },
            text: `By ${post.authors[0].name}`,
          },
          {
            href: "/",
            icon: {
              name: "mdi:comment-text",
              color: "text-blue-300",
              size: 25,
            },
            text: post.comments,
          },
          {
            href: "/",
            icon: {
              name: "mdi:eye",
              color: "text-blue-300",
              size: 25,
            },
            text: post.views,
          }
        ]
      },
      tagstrip: {
        items: post.tags.map(tag=>({
          href: "/",
          icon: {
            name: "mdi:android-studio",
            color: "text-blue-300",
            size: "15",
          },
          text: tag,
        }))
      },
      share: {
      items: [
        {
          classx: "px-4 text-lg",
          text: "Share This Post",
        },
        {
          href: "https://facebook.com",
          icon: {
            name: "mdi:facebook",
            color: "text-blue-300",
            size: "33",
          },
        },
        {
          href: "https://twitter.com",
          icon: {
            name: "mdi:twitter",
            color: "text-blue-300",
            size: "33",
          },
        },
        {
          href: "https://instagram.com",
          icon: {
            name: "mdi:instagram",
            color: "text-blue-300",
            size: "33",
          }
        }
      ]
      }
    }
  )
}

export default parse