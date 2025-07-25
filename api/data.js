// api/data.js
const educationHistory = [
  {
    institution: 'STM Pembangunan Yogyakarta',
    degree: 'Kimia Industri',
    period: '2019 - 2023',
    description: '',
  },
  {
    institution: 'Universitas Amikom',
    degree: 'S1 Teknik Informatika',
    period: '2023 - ',
    description: 'Fokus belajar sampai bisa.',
  },
]

const skills = [
  { id: '1', name: 'Public Speaking', level: 'Skill otodidak yang saya asah sendiri demi keberlangsungan saya kedepannya', url: '/PublicSpeaking.png' },
  { id: '2', name: 'Singing', level: 'Hobi yang membawaku sampai di panggung event', url: '/Singing.png' },
  { id: '3', name: 'Wotagei', level: 'Hobi mainan lampu yang aku lakukan tiap malam', url: '/Wotagei.png' },
]

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Website pribadi untuk menampilkan profil dan proyek.',
    techStack: ['Vue.js', 'Tailwind CSS'],
    link: 'https://your-portfolio-site.com',
    github: 'https://github.com/Iruru21',
    image: '/Profil.png'
  },
  {
    title: 'Project Wotagei',
    description: 'Berisikan kegiatan wotagei dalam berupa project.',
    techStack: ['Vue.js', 'Tailwind CSS'],
    link: 'https://your-portfolio-site.com',
    github: 'https://github.com/Iruru21',
    image: '/wotagei.jpeg'
  },
  {
    title: 'Project Penanaman Pipa Gas Induk',
    description: 'Project IKN pemasangan pipa gas induk yang dilaksanakan di Kalimantan Timur.',
    techStack: ['Vue.js', 'Tailwind CSS'],
    link: 'https://your-portfolio-site.com',
    github: 'https://github.com/Iruru21',
    image: '/ikn.jpeg'
  },
  {
    title: 'Praktek Kerja Lapangan',
    description: 'PKL dilaksanakan di PT. Coconut Center yang berlokasi di Kota Jogjakarta.',
    techStack: ['Vue.js', 'Tailwind CSS'],
    link: 'https://your-portfolio-site.com',
    github: 'https://github.com/Iruru21',
    image: '/pkl.jpeg'
  }
]

module.exports = {
  educationHistory,
  skills,
  projects
}; 