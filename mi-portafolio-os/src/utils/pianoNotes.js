let currentIndex = 0;

export const notes = [
  "https://res.cloudinary.com/dxjrdqbio/video/upload/v1748750292/piano1_njtsh3.mp3",
  "https://res.cloudinary.com/dxjrdqbio/video/upload/v1748750292/piano2_l9opib.mp3",
  "https://res.cloudinary.com/dxjrdqbio/video/upload/v1748750292/piano3_hiybn7.mp3",
  "https://res.cloudinary.com/dxjrdqbio/video/upload/v1748750292/piano4_k855nz.mp3",
  "https://res.cloudinary.com/dxjrdqbio/video/upload/v1748750292/piano5_mz2g5k.mp3",
  "https://res.cloudinary.com/dxjrdqbio/video/upload/v1748750292/piano6_nnbwsr.mp3",
  "https://res.cloudinary.com/dxjrdqbio/video/upload/v1748750292/piano7_u8nage.mp3",
  "https://res.cloudinary.com/dxjrdqbio/video/upload/v1748750292/piano8_dorxcs.mp3",
  "https://res.cloudinary.com/dxjrdqbio/video/upload/v1748750291/piano9_leye91.mp3",
  "https://res.cloudinary.com/dxjrdqbio/video/upload/v1748750292/piano10_t7tf8b.mp3",
  "https://res.cloudinary.com/dxjrdqbio/video/upload/v1748750292/piano11_aroy60.mp3",
  "https://res.cloudinary.com/dxjrdqbio/video/upload/v1748750291/piano12_yvn5ph.mp3",
  "https://res.cloudinary.com/dxjrdqbio/video/upload/v1748750292/piano13_izsute.mp3",
];

export function getNextIndex(){
    const index = currentIndex;
    currentIndex = (currentIndex + 1) % notes.length;
    return index;
}