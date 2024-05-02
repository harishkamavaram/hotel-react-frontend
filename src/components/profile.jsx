import {  Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Profile(){
  const user = useSelector((state) => state.user);
  // console.log(user)
    return(
        <div>
        <main id="main" class="main">

<div class="pagetitle">
  <h1>Profile</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><Link href="/">Home</Link></li>
      <li class="breadcrumb-item">Users</li>
      <li class="breadcrumb-item active">Profile</li>
    </ol>
  </nav>
</div>

<section class="section profile">
  <div class="row">
    <div class="col-xl-4">

      <div class="card">
        <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">

          <img src={user.picture} alt="Profile" class="rounded-circle"/>
          <h2>{user.name}</h2>
          <h3>{user.email}</h3>
          
          <div class="social-links mt-2">
            <Link href="#" class="twitter"><i class="bi bi-twitter"></i></Link>
            <Link href="#" class="facebook"><i class="bi bi-facebook"></i></Link>
            <Link href="#" class="instagram"><i class="bi bi-instagram"></i></Link>
            <Link href="#" class="linkedin"><i class="bi bi-linkedin"></i></Link>
          </div>
        </div>
      </div>

    </div>

    <div >
      <Link to="/users/login" >
        <img src="https://www.pngitem.com/pimgs/m/140-1405840_png-hd-login-button-green-login-button-png.png"
        alt="login btn"
        style={{height: 50}}/>
      </Link>
    </div>
  </div>
</section>

</main>

        </div>
    )
}

export default Profile;