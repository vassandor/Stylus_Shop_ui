function Menu() {
    return(
        <div>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>
    )
}

function Header(props) {
    return(
        <div>
            <h1>{props.title}</h1>
            <Menu/>
        </div>
    )
}

function Content() {
    return(
        <div>
            <hr/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, laboriosam minus provident ratione recusandae unde. A accusantium ducimus facilis hic, in nobis quibusdam quisquam sit? Adipisci at consequuntur delectus enim est, iste molestiae, nisi nulla placeat quibusdam sapiente temporibus unde. Et facere illum inventore? Cum cupiditate delectus explicabo fugiat illo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda blanditiis consequatur ducimus enim error, excepturi fugiat optio porro, quae quas, recusandae reprehenderit tenetur ullam unde voluptatem voluptates? Architecto aspernatur commodi consequatur consequuntur cupiditate deleniti dicta dignissimos dolore dolorem eos, ipsa iusto laboriosam modi optio placeat repellendus tempora vel velit vitae voluptatum. Ad, aliquam amet dolorum ea id natus nulla perferendis rerum tempora voluptatem. Ducimus error eveniet maiores odio quaerat quibusdam repellendus rerum ullam. Corporis culpa distinctio fugiat libero modi mollitia, nobis omnis optio possimus quae quaerat quasi qui reiciendis sed sit ullam veniam voluptate? Adipisci eveniet ipsa officiis voluptatem.</p>
        </div>
    )
}

function Footer({title, address, phone, email}) {
    return(
        <div>
            <hr/>
            <h3>{title}</h3>
            <p>{address}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
        </div>
    )
}

function App() {
  return (
    <div>
        <Header title="Stylus Shop"/>

        <Content/>

        <Footer
            title="Stylus Shop"
            address="Budapest"
            phone="+36-30-123-4567"
            email="stylusshop@gmail.com"
        />
    </div>
  );
}

export default App;
