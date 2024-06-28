<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import FormInput from '$lib/components/FormInput.svelte';
	import img from '$lib/images/Logo Hacer hitam.png';
	import ContainerSo from '$lib/components/core/ContainerSo.svelte';
	import NavTest from '$lib/components/NavTest.svelte';
	import BoxSo from '$lib/components/core/BoxSo.svelte';
	
	let body = {
		uname: '',
		passwd: ''
	};

	let endpoint = 'http://127.0.0.1:8888/user/signin';
	let error = ''; // Variabel untuk menyimpan pesan kesalahan

	// todo data post to api
	async function gass() {
		const res = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
		const data = await res.json();

		if (res.status === 200) {
			localStorage.setItem('key', data.key);
			window.location.href = '/dashboard';
		} else {
			error = 'Username atau password salah'; // Set pesan kesalahan jika login gagal
			setTimeout(() => {
				error = ''; // Hapus pesan kesalahan setelah beberapa detik
			}, 3000);
		}
	}
</script>

{#if error}
<div class="popup">
	<p>{error}</p>
</div>
{/if}

<div class="d-flex justify-content-center align-items-center vh-100">
    <ContainerSo>
		<img src={img} alt="Logo Hacer" class="logo">
        <BoxSo>
            <div class="box-content">
                <p>Get ready<br>for the<br>busyness?</p>
                <hr />
				<label class="input-label">Username</label>
                <input type="text" id="uname" class="input-field" placeholder="Username" bind:value={body.uname} />
                <label class="input-label">Password</label>
                <input type="password" id="passwd" class="input-field" placeholder="Password" bind:value={body.passwd} />
				<button class="sign-in-button" on:click={gass}>Sign In</button>
				<hr class="secondary-hr" />
				<a href="/" class="create-account-link">Create Account</a>
                <a href="/about" class="create-account-link">About Hacer</a>
            </div>
        </BoxSo>
    </ContainerSo>
</div>

<style>
    :global(body) {
        background-color: #515173;
    }

	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

    .vh-100 {
        height: 100vh;
    }
    .d-flex {
        display: flex;
    }
    .justify-content-center {
        justify-content: center;
    }
    .align-items-center {
        align-items: center;
    }
    .box-content {
        text-align: left; /* Atur teks ke kiri */
        font-family: 'Poppins', sans-serif;
        font-weight: 500; /* Poppins Medium */
        font-size: 32px;
        color: #000000;
        box-sizing: border-box; /* Pastikan padding dihitung dalam ukuran total elemen */
    }
    .box-content p {
        margin: 0; /* Hilangkan margin default pada paragraf */
        padding-right: 5px; /* Tambahkan padding kanan */
    }
    .box-content hr {
        width: 611px;
        border: none;
        height: 1px;
        background-color: #f30d0d; /* Warna merah */
        margin: 20px auto; /* Atur margin otomatis untuk rata tengah */
    }
    .box-content .input-label {
        font-size: 16px;
        margin-top: 20px; /* Tambahkan margin atas */
        display: block;
    }
    .box-content .input-field {
        width: 611px;
        height: 44px;
        border-radius: 10px;
        border: 1px solid #ccc; /* Warna border */
        padding: 10px;
        box-sizing: border-box;
        font-size: 16px;
    }

	.box-content .sign-in-button {
        width: 129px;
        height: 44px;
        border-radius: 10px;
        background-color: #ffffff; /* Warna tombol, bisa disesuaikan */
        color: rgb(0, 0, 0);
        border: none;
        font-size: 16px;
        cursor: pointer;
        margin-left: auto; /* Buat tombol berada di sebelah kanan */
        margin-top: 10px; /* Tambahkan margin atas untuk jarak dengan form password */
        margin-right: 10px; /* Geser tombol ke kiri sedikit */
        display: block;
		transition: background-color 0.3s ease; /* Tambahkan transisi untuk animasi */
    }

    .box-content .sign-in-button:hover {
        background-color: #e0e0e0; /* Warna tombol saat di-hover */
    }

    .box-content .sign-in-button:active {
        background-color: #007bff; /* Warna tombol saat diklik */
    }

	.logo {
        margin-bottom: 20px; /* Tambahkan margin bawah untuk memberikan ruang antara logo dan box */
        width: 329px; /* Sesuaikan lebar logo */
        height: 329px; /* Sesuaikan tinggi logo */
        object-fit: contain; /* Pertahankan aspek rasio logo */
		transform: translateX(-35px); /* Geser logo ke kiri sebesar 35px */
    }

	.popup {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(255, 0, 0, 0.9);
        color: white;
        padding: 15px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }

    .error-message {
        color: red;
        font-size: 14px;
    }

	.secondary-hr {
        width: 611px;
        border: none;
        height: 1px;
        background-color: #ccc; /* Warna abu-abu untuk hr kedua */
        margin: 20px auto; /* Atur margin otomatis untuk rata tengah */
    }

    .create-account-link {
        display: block;
        text-align: center;
        margin-top: 10px; /* Tambahkan sedikit ruang di atas link */
        font-size: 14px;
        color: #007bff;
        text-decoration: none;
    }

    .create-account-link:hover {
        text-decoration: underline;
    }
</style>
