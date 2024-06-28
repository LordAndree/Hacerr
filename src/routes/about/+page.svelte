<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import NavTest from '$lib/components/NavTest.svelte';
	import Box from '$lib/components/core/Box.svelte';
	import CardPerson from '$lib/components/core/CardPerson.svelte';
	import Container from '$lib/components/core/Container.svelte';
	import lordandreimg from '$lib/images/lord_andre.jpg';
	import bambangimg from '$lib/images/bambang2.png';
	import rastraimg from '$lib/images/rastra.jpg';
	import mambaulimg from '$lib/images/mambaul.png';
	import kyimg from '$lib/images/ky.png';

  
	const teamMembers = [
	  { role: 'Product Owner', name: 'Dimas Pramudya Nagara', id: '21.11.4040', image: bambangimg, alt: 'Bambang' },
	  { role: 'Scrum Master', name: 'Rizki Gunawan', id: '21.11.4074', image: kyimg, alt: 'Ky' },
	  { role: 'Developer Team', name: 'Mambaul Hisyam', id: '21.11.4107', image: mambaulimg, alt: 'Mambaul' },
	  { role: 'Developer Team', name: 'Andreas Adrian', id: '21.11.4075', image: lordandreimg, alt: 'Lord_Andre' },
	  { role: 'Developer Team', name: 'Rastra Ardiansyah Pora', id: '21.11.4077', image: rastraimg, alt: 'Rastra' }
	];
  </script>
  
  <style>
	th, td {
	  border: 1px solid black;
	  border-radius: 10px;
	  padding: 1%;
	  align-items: center;
	  justify-content: center;
	}
	.kelompokcard {
	  margin: 2%;
	  padding: 1%;
	  border: solid;
	  border-radius: 12px;
	}
	img {
	  width: 200px;
	  height: 200px;
	  padding: 1px;
	  border: solid;
	  margin: 30px;
	  border-radius: 12px;
	  margin-top: 1%;
	}
	.card-container {
	  display: flex;
	  flex-direction: row;
	  justify-content: space-between;
	  align-self: center;
	}
  </style>
  
  <Container>
	<Nav></Nav>
	<br>
	<Box minWidth="81%" maxWidth="0">
	  <div style="display: flex; flex-direction: column; align-content: center; text-align: center;">
		<h1><b>Hacer Team</b></h1>
		<br>
		<div class="card-container">
		  {#each teamMembers.slice(0, 2) as member}
			<CardPerson>
			  <h4><b>{member.role}</b></h4>
			  <img src={member.image} alt={member.alt}>
			  <h5>{member.name}</h5>
			  <h6>{member.id}</h6>
			</CardPerson>
		  {/each}
		</div>
		<div class="card-container">
		  {#each teamMembers.slice(2) as member}
			<CardPerson>
			  <h4><b>{member.role}</b></h4>
			  <img src={member.image} alt={member.alt}>
			  <h5>{member.name}</h5>
			  <h6>{member.id}</h6>
			</CardPerson>
		  {/each}
		</div>
		<br>
		<hr>
		<h5 style="text-align: center;"><b>Hacer</b> adalah sebuah aplikasi web yang dirancang untuk membantu 
			Anda mengelola kehidupan Anda dengan lebih efektif.  
			Dengan tampilan yang sederhana, minimalis, dan fungsional, 
			Hacer bertujuan untuk menyediakan alat yang intuitif dan efisien 
			untuk memenuhi kebutuhan manajemen pribadi Anda. 
			Kami memahami betapa pentingnya menjaga keseimbangan antara pekerjaan 
			dan kehidupan pribadi. 
			Oleh karena itu Hacer hadir untuk membantu Anda 
			merencanakan tugas, mengatur jadwal, dan melacak kemajuan Anda dengan mudah. 
			Fitur-fitur kami dirancang untuk mendukung produktivitas Anda tanpa mengorbankan kenyamanan.
			Apakah Anda siap untuk menghadapi kesibukan?
			Dengan Hacer, Anda akan selalu berada di jalur yang tepat untuk mencapai tujuan Anda. 
			Nikmati kemudahan dalam mengatur dan menyederhanakan aktivitas harian Anda. 
		</h5>
		<br>
		<h4><b>Hacer - Do you ready for the busyness?</b></h4>
	  </div>
	</Box>
  </Container>
  