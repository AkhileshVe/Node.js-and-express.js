export default function form (){
    return `<form action="/submit" method="post">
    <input type="name" placeholder="enter name"></input>
    <br>
      <br>
        <input type="email" placeholder="enter email"></input>
          <br>
      <br>
        <button>login</button>
        <a href='/'> Go to home </a>
    </form>`
}