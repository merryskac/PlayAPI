
# Play API
## Database Structure

* Channel Schema
```http
  {
    _id: ObjectId(),
    title: String,
    thumbnail_img: String,
    created_at: Date.now,
    ended_at: Date.now,
  }
```
* Comment Schema
```http
  {
    _id: ObjectId(),
    username: String,
    comment: String,
    videoID: String,
    timestamp: Date.now
  }
```
* Product Schema
```http
  {
    _id: ObjectId(),
    link_product: String,
    title: String,
    price: String,
    videoID: String
  }
```

.
## API Structure
* Get All Thumbnail
```http
  GET /play/thumbnails
```
* Post a video
```http
  POST /play/post-video

```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. Your Video title |
| `thumbnail_img` | `string` | **Required**. Your thumbnail source |

* Get Comments By Video Id
```http
  GET /play/comments/${id}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Video id (_id)|

* Post a comment
```http
  POST /play/comments/${id}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Video id (_id) |
| `username` | `string` | **Required**. your username |
| `comment` | `string` | **Required**. your comment |

* Get All Products by Video Id
```http
  GET /play/products/${id}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Video Id (_id) |

* Add a product
```http
  POST /play/products/${id}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Video Id (_id) |

# API Request and Response

## GET /play/thumbnails
* URL Params \
  none
* Data Params \
  None
* Headers \
  Content-Type: application/json
* Success Response \
  * Code: 200 \
  * Content:
  ```
  {
    thumbnails: [
      {<channel_object>}
      {<channel_object>}
      {<channel_object>}
    ]
  }
  ```

## POST /play/post-video
* URL Params \
  none
* Data Params 
  ```
  {
    title: string,
    thumbnail_img: string
  }
  ```
* Headers \
  Content-Type: application/json
* Success Response \
  * Code: 200 \
  * Content:
  ```
  {
    video: {<channel_object>}
  }
  ```
* Error Response: \
  * Code: 400 \
    content: ```{message: title and thumbnail_img are required}```


## GET /play/comments/:id
* URL Params \
  Required: ```id: string```
* Data Params  \
  None
* Headers \
  Content-Type: application/json
* Success Response \
  * Code: 200 \
  * Content:
  ```
  {
    comments: [
      {<comment_object>},
      {<comment_object>},
      {<comment_object>} 
    ]
  }
  ```
* Error Response:
  * Code: 404 \
    content: ```{message: "Video content not found"}```\
    OR 
  * Code: 400 \
    content: ``` {message: "Cast to ObjectId failed for value \"${id}" (type string) at path \"_id"} ``` 



## POST /play/comments/:id
  * URL Params \
  Required: ```id: string```
* Data Params  \
  ```
  {
    username: string,
    comment: string
  }
  ```
* Headers \
  Content-Type: application/json
* Success Response \
  * Code: 200 \
  * Content:
  ```
  {
    message:"Comment successfully added"
  }
  ```
* Error Response:
  * Code: 404 \
    content: ```{message: "Video content not found"}```\
    OR 
  * Code: 400 \
    content: ``` {message: "Cast to ObjectId failed for value \"${id}" (type string) at path \"_id"} ``` 
  * Code: 400 \
    content: ```{message: title and thumbnail_img are required}```

## GET /play/products/:id
  * URL Params \
  Required: ```id: string```
* Data Params  \
* Headers \
  Content-Type: application/json
* Success Response \
  * Code: 200 \
  * Content:
  ```
  {
    products:[
      {<product_object>},
      {<product_object>},
      {<product_object>}
    ]
  }
  ```
* Error Response:
  * Code: 404 \
    content: ```{message: "Video content not found"}```\

    OR 
  * Code: 400 \
    content: ``` {message: "Cast to ObjectId failed for value \"${id}" (type string) at path \"_id"} ``` 


## POST /play/products/:id
  * URL Params \
  Required: ```id: string```
* Data Params  \
  ```
  {
    "link_product":string,
      "name":string,
      "price":int
  }
  ```
* Headers \
  Content-Type: application/json
* Success Response \
  * Code: 200 \
  * Content:
  ```
  {
    product:{<product_object>}
  }
  ```
* Error Response:
  * Code: 404 \
    content: ```{message: "Video content not found"}```\

    OR 
  * Code: 400 \
    content: ``` {message: "Cast to ObjectId failed for value \"${id}" (type string) at path \"_id"} ``` 

    OR
  * Code: 400 \
    content: ```{message: Data link_product, name, price are required!}```

    OR
  * Code: 400 \
    content: ```{message: price should be number}```
