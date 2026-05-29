// ─── RETRO TOONS · CATÁLOGO ───────────────────────────────────
// Para agregar una serie nueva, copia un bloque {} y pégalo aquí.
// identifier = ID del item en archive.org
// episodes   = [{n:'01', title:'Nombre del episodio'}]

function generarEps(total, titulos) {
  const eps = [];
  for (let i = 1; i <= total; i++) {
    const n = String(i).padStart(2, '0');
    eps.push({ n, title: titulos[n] || `Episodio ${n}` });
  }
  return eps;
}

const CATALOG = [

  {
    id: 'thundercats',
    title: 'ThunderCats',
    years: '1985–1988',
    emoji: '⚡🐱',
    audio: 'Español Latino + Inglés',
    desc: 'Los felinos cósmicos huyen de Thundera y llegan a la Tercera Tierra. Lion-O y la Espada del Augurio enfrentan al eterno Mumm-Ra.',
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
    years: '1983–1985',
    emoji: '⚔️💪',
    audio: 'Español Latino',
    desc: 'El Príncipe Adam de Eternia se transforma en He-Man, el hombre más poderoso del universo, para defender Grayskull de Skeletor.',
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
    years: '1986–1987',
    emoji: '🦅🚀',
    audio: 'Español Latino',
    desc: 'Guerreros mitad metal, mitad carne protegen la galaxia Limbo contra Mon*Star. ¡65 episodios completos en latino!',
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

];
// ─────────────────────────────────────────────────────────────
