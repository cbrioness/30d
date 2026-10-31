function withScreenshots(game) {
  const { mechanicLabels, ...rest } = game
  return {
    ...rest,
    screenshots: [1, 2, 3, 4].map(
      (shot) => `https://picsum.photos/seed/${game.id}-${shot}/1280/720`,
    ),
    mechanics: mechanicLabels.map((label, index) => ({
      label,
      image: `https://picsum.photos/seed/${game.id}-mech-${index + 1}/960/540`,
    })),
  }
}

const catalog = [
  {
    id: 'hades',
    name: 'Hades',
    genre: 'Roguelike',
    platform: 'PC',
    platforms: ['PC', 'Switch', 'PlayStation', 'Xbox'],
    year: 2020,
    description:
      'Zagreus intenta escapar del Inframundo y cada muerte lo devuelve a la casa de Hades. El combate es rápido y la historia cambia en cada intento.',
    cover:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/library_600x900.jpg',
    mechanicLabels: ['Dash', 'Bendiciones', 'Lanzamiento'],
  },
  {
    id: 'celeste',
    name: 'Celeste',
    genre: 'Plataformas',
    platform: 'Switch',
    platforms: ['PC', 'Switch', 'PlayStation', 'Xbox'],
    year: 2018,
    description:
      'Madeline escala la montaña Celeste. Es un desafío de plataformas preciso que también cuenta su lucha con la ansiedad.',
    cover:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/504230/library_600x900.jpg',
    mechanicLabels: ['Dash', 'Escalada', 'Pared'],
  },
  {
    id: 'stardew',
    name: 'Stardew Valley',
    genre: 'Simulación',
    platform: 'PC',
    platforms: ['PC', 'Switch', 'PlayStation', 'Xbox', 'Móvil'],
    year: 2016,
    description:
      'Dejás la ciudad para heredar una granja. Cultivás, hacés amigos y reconstruís el pueblo a tu propio ritmo.',
    cover:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/library_600x900.jpg',
    mechanicLabels: ['Cultivo', 'Pesca', 'Amistades'],
  },
  {
    id: 'hollow-knight',
    name: 'Hollow Knight',
    genre: 'Metroidvania',
    platform: 'PC',
    platforms: ['PC', 'Switch', 'PlayStation', 'Xbox'],
    year: 2017,
    description:
      'Un caballero silencioso desciende a Hallownest, un reino de insectos en ruinas, y explora sus mapas interconectados.',
    cover:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/367520/library_600x900.jpg',
    mechanicLabels: ['Dash sombra', 'Alma', 'Mapa'],
  },
  {
    id: 'portal-2',
    name: 'Portal 2',
    genre: 'Puzles',
    platform: 'PC',
    platforms: ['PC', 'PlayStation', 'Xbox'],
    year: 2011,
    description:
      'Resolvés cámaras de prueba con portales, junto a una compañera muy habladora y una instalación que se cae a pedazos.',
    cover:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/620/library_600x900.jpg',
    mechanicLabels: ['Portales', 'Geles', 'Cubos'],
  },
  {
    id: 'disco-elysium',
    name: 'Disco Elysium',
    genre: 'RPG',
    platform: 'PC',
    platforms: ['PC', 'Switch', 'PlayStation', 'Xbox'],
    year: 2019,
    description:
      'Un detective sin memoria investiga un asesinato en Revachol. Las decisiones y las voces de su cabeza arman el caso.',
    cover:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/632470/library_600x900.jpg',
    mechanicLabels: ['Habilidades', 'Diálogo', 'Pensamientos'],
  },
  {
    id: 'outer-wilds',
    name: 'Outer Wilds',
    genre: 'Aventura',
    platform: 'PlayStation',
    platforms: ['PC', 'PlayStation', 'Xbox', 'Switch'],
    year: 2019,
    description:
      'Explorás un sistema solar atrapado en un bucle de 22 minutos. Lo que aprendés es el verdadero progreso.',
    cover:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/753640/library_600x900.jpg',
    mechanicLabels: ['Bucle', 'Nave', 'Señales'],
  },
  {
    id: 'cuphead',
    name: 'Cuphead',
    genre: 'Run and gun',
    platform: 'Xbox',
    platforms: ['PC', 'Switch', 'PlayStation', 'Xbox'],
    year: 2017,
    description:
      'Un trato con el diablo obliga a Cuphead y Mugman a pelear contra jefes dibujados como un cartoon de los años 30.',
    cover:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/268910/library_600x900.jpg',
    mechanicLabels: ['Disparo', 'Esquive', 'Parry'],
  },
]

export const games = catalog.map(withScreenshots)
