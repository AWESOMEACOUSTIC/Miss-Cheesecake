import poster1 from '../assets/images/biscoff-poster.png'
import poster2 from '../assets/images/strawberry-poster.png'
import poster3 from '../assets/images/tiramisu-poster.png'

const posters = [
  { id: 1,   imageSrc: poster1},
  { id: 2, imageSrc: poster2},
  { id: 3, imageSrc: poster3},
]

export default function PosterGallery() {
  return (
    <div className="px-4 md:px-8 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
      {posters.map(p => (
        <div
          key={p.id}
          className="flex flex-col items-center justify-center rounded-lg p-4"
        >
          <img
            src={p.imageSrc}
            alt={p.title}
            className="w-full h-auto object-contain mb-2"
          />
        </div>
      ))}
    </div>
  )
}
