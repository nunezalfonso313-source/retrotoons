// ─── RETRO TOONS · CATÁLOGO ───────────────────────────────────────────────
// type: 'archive' → usa archive.org/embed/{identifier}
// type: 'youtube' → usa youtube.com/embed/{videoId} o playlist
// type: 'ytplaylist' → embed de playlist completa de YouTube
//
// Para agregar una serie nueva copia un bloque y ajusta los datos.
// ─────────────────────────────────────────────────────────────────────────

function generarEps(total, titulos) {
  const eps = [];
  for (let i = 1; i <= total; i++) {
    const n = String(i).padStart(2, '0');
    eps.push({ n, title: titulos[n] || `Episodio ${n}` });
  }
  return eps;
}

const CATALOG = [

  // ── ARCHIVE.ORG ──────────────────────────────────────────────────────────

  {
    id: 'thundercats',
    title: 'ThunderCats',
    years: '1985–1988', emoji: '⚡🐱',
    audio: 'Español Latino + Inglés',
    desc: 'Los felinos cósmicos huyen de Thundera y llegan a la Tercera Tierra. Lion-O y la Espada del Augurio enfrentan al eterno Mumm-Ra.',
    type: 'archive',
    identifier: 'thundercats-1985-latinoingles-1080p',
    episodes: generarEps(10, {
      '01':'Éxodo','02':'La alianza profana','03':'La ayuda de los Berbils',
      '04':'Los esclavos del castillo Plun-Darr','05':'Pumm-Ra',
      '06':'El terror de Brazo de Hierro','07':'Cuestión de tiempo',
      '08':'El torreón de las trampas','09':'El jardín de las delicias',
      '10':'Mandora - La combatiente del mal',
    })
  },

  {
    id: 'heman',
    title: 'He-Man y los Amos del Universo',
    years: '1983–1985', emoji: '⚔️💪',
    audio: 'Español Latino',
    desc: 'El Príncipe Adam de Eternia se transforma en He-Man, el hombre más poderoso del universo, para defender Grayskull de Skeletor.',
    type: 'archive',
    identifier: 'He-Man-T1-BerserkLatam',
    episodes: generarEps(10, {
      '01':'El rayo desaparecedor de diamante','02':'El fantasma del castillo',
      '03':'Evilseed','04':'Teela la guerrera','05':'La trampa de Skeletor',
      '06':'El hechizo del dragón','07':'El misterio de Eternia',
      '08':'El ladrón de poderes','09':'El pozo de la eternidad',
      '10':'El juego del destino',
    })
  },

  {
    id: 'halcones',
    title: 'Halcones Galácticos',
    years: '1986–1987', emoji: '🦅🚀',
    audio: 'Español Latino',
    desc: 'Guerreros mitad metal, mitad carne protegen la galaxia Limbo contra Mon*Star. ¡65 episodios completos en latino!',
    type: 'archive',
    identifier: 'los-halcones-galacticos-audio-latino',
    episodes: generarEps(65, {
      '01':'La Historia Original','02':'Viaje a Limbo','03':'Al Devorador de Planetas',
      '04':'Para Salvar al Sol','05':'Que no se Detenga el Tiempo','06':'Una Ave Rapaz',
      '07':'El Cuarto Secreto','08':'Una Amenaza de Guerra','09':'Sky-Shadow',
      '10':'Una Atracción Magnética','11':'Escudo de Oro','12':'Zero el Ladrón de la Memoria',
      '13':'El Traslado','14':'Trampa para Artillero Pt.1','15':'Trampa para Artillero Pt.2',
      '16':'Carrera Contra el Tiempo','17':'Operación Congelador','18':'La Nave Fantasma',
      '19':'La Gran Carrera Galáctica','20':'La Pantalla Fantasma',
    })
  },

  // ── YOUTUBE PLAYLISTS OFICIALES ──────────────────────────────────────────

  {
    id: 'caballeros',
    title: 'Caballeros del Zodiaco',
    years: '1986–1989', emoji: '🛡️⭐',
    audio: 'Español Latino (Toei Oficial)',
    desc: 'Seiya y los Caballeros de Bronce luchan para proteger a la diosa Atenea. Doblaje latino original remasterizado, subido oficialmente por Toei Animation Latinoamérica.',
    type: 'ytplaylist',
    playlistId: 'PLMfflniL6YPSaEDVn29G_gfMhLjHbqzRd',
    episodes: generarEps(30, {
      '01':'El Caballero del Cosmos','02':'El Guerrero de Pegaso','03':'El Caballero de Dragón',
      '04':'El Cisne de Cygnus','05':'El Caballero de Andrómeda','06':'La Batalla del Santuario',
      '07':'El Fénix de Ikki','08':'La Armadura de Oro','09':'El Gran Torneo',
      '10':'Los Doce Palacios',
    })
  },

  {
    id: 'dbz',
    title: 'Dragon Ball Z',
    years: '1989–1996', emoji: '🐉💥',
    audio: 'Español Latino (Toei Oficial)',
    desc: 'Goku adulto defiende la Tierra contra los Saiyajins, Freezer, Cell y Majin Boo. Doblaje latino clásico en el canal oficial de Toei Animation Latinoamérica.',
    type: 'ytplaylist',
    playlistId: 'PLMfflniL6YPTbMkNM0dKbL0mFHEPCJCGv',
    episodes: generarEps(50, {
      '01':'La llegada de Raditz','02':'El poder de Gohan','03':'La muerte de Piccolo',
      '04':'Los Guerreros Z se entrenan','05':'El planeta Namek','06':'La batalla contra Freezer',
    })
  },

  {
    id: 'digimon',
    title: 'Digimon Adventure',
    years: '1999–2000', emoji: '🦕📱',
    audio: 'Español Latino (Toei Oficial)',
    desc: 'Tai, Agumon y sus amigos son transportados al Mundo Digital donde deberán salvar ambos mundos junto a sus Digimon. Canal oficial Toei Animation Latinoamérica.',
    type: 'ytplaylist',
    playlistId: 'PLMfflniL6YPR6cTNqRfV9qlCqFSroiSdB',
    episodes: generarEps(54, {
      '01':'Agumon, ¡Digivoluciona!','02':'Gomamon en el mar','03':'Garurumon',
      '04':'Biyomon se vuelve fuerte','05':'Palmon crece','06':'El Agumon de Tai crece',
    })
  },

  {
    id: 'muppetbabies',
    title: 'Muppet Babies',
    years: '1984–1991', emoji: '🐸🐷',
    audio: 'Español Latino',
    desc: 'Kermit, Miss Piggy, Gonzo, Fozzie y sus amigos son bebés que usan su imaginación para vivir aventuras épicas sin salir de su cuarto de juegos.',
    type: 'ytplaylist',
    playlistId: 'PLX5JbW0Eu94Og4kh9wVMIgPPmpIcQaKcP',
    episodes: generarEps(20, {
      '01':'Vecinos escandalosos','02':'El diente de Fozzie','03':'¿Quién le teme a la oscuridad?',
      '04':'En busca del Muppet perdido','05':'Soy tu bebé','06':'El fantasma de la ópera',
    })
  },

  {
    id: 'inspectorgadget',
    title: 'Inspector Gadget',
    years: '1983–1985', emoji: '🕵️⚙️',
    audio: 'Español Latino',
    desc: 'El torpe pero entrañable Inspector Gadget, con sus infinitos artilugios mecánicos, enfrenta a la organización criminal MAD dirigida por el Dr. Garra.',
    type: 'ytplaylist',
    playlistId: 'PLpSWLIHTG6ieqUyDk2Vrnq1gWKhvWIafS',
    episodes: generarEps(65, {
      '01':'Lago Monstruo','02':'La granja','03':'El circo','04':'El Amazonas',
      '05':'El balneario','06':'El barco','07':'El castillo encantado',
      '08':'Carrera al final','09':'El rubí','10':'Una estrella se pierde',
    })
  },

];
// ─────────────────────────────────────────────────────────────────────────
