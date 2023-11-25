import { FC } from 'react'
import './MusicCard.css'

interface Props {
    artworkUrl100: string
    artistName: string
    collectionCensoredName: string
    trackViewUrl: string
}

const MusicCard: FC<Props> = () => (
   <div>MusicCard</div>)

export default MusicCard;