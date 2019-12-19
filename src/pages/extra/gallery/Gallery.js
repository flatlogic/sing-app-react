import React from 'react';
import {
  Button,
  ButtonGroup,
} from 'reactstrap';

import Lightbox from 'react-images';
import s from './Gallery.module.scss';

import pic1 from '../../../images/pictures/1.jpg';
import pic2 from '../../../images/pictures/2.jpg';
import pic3 from '../../../images/pictures/3.jpg';
import pic4 from '../../../images/pictures/4.jpg';
import pic5 from '../../../images/pictures/5.jpg';
import pic6 from '../../../images/pictures/6.jpg';
import pic8 from '../../../images/pictures/8.jpg';
import pic9 from '../../../images/pictures/9.jpg';
import pic10 from '../../../images/pictures/10.jpg';
import pic11 from '../../../images/pictures/11.jpg';
import pic13 from '../../../images/pictures/13.jpg';
import pic14 from '../../../images/pictures/14.jpg';

const items = [
  {
    name: 'Mountains',
    groups: [
      'nature',
    ],
    src: pic1,
    date: '10 mins',
  },
  {
    name: 'Empire State Pigeon',
    groups: [
      'people',
    ],
    src: pic2,
    date: '1 hour',
    like: true,
  },
  {
    name: 'Big Lake',
    groups: [
      'nature',
    ],
    src: pic3,
    date: '2 mins',
    like: true,
  },
  {
    name: 'Forest',
    groups: [
      'nature',
    ],
    src: pic4,
    date: '2 mins',
    like: true,
  },
  {
    name: 'Smile',
    groups: [
      'people',
    ],
    src: pic5,
    date: '2 mins',
  },
  {
    name: 'Smile',
    groups: [
      'people',
    ],
    src: pic6,
    date: '1 hour',
    like: true,
  },
  {
    name: 'Fog',
    groups: [
      'nature',
    ],
    src: pic8,
    date: '2 mins',
    like: true,
  },
  {
    name: 'Beach',
    groups: [
      'people',
    ],
    src: pic9,
    date: '2 mins',
  },
  {
    name: 'Pause',
    groups: [
      'people',
    ],
    src: pic10,
    date: '3 hour',
    like: true,
  },
  {
    name: 'Space',
    groups: [
      'space',
    ],
    src: pic11,
    date: '3 hour',
    like: true,
  },
  {
    name: 'Shuttle',
    groups: [
      'space',
    ],
    src: pic13,
    date: '35 mins',
    like: true,
  },
  {
    name: 'Sky',
    groups: [
      'space',
    ],
    src: pic14,
    date: '2 mins',
  },
];

class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      currentImage: 0,
      lightboxIsOpen: false,
      children: items,
      activeGroup: 'all',
      order: 'asc',
      theme: {
        arrow: {
          ':focus': {
            outline: 0,
          },
        },
        close: {
          ':focus': {
            outline: 0,
          },
        },
      },
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  handleClickImage() {
    if (this.state.currentImage === this.state.children.length - 1) return;

    this.gotoNext();
  }

  filterChildren(type) {
    this.setState({
      children: type === 'all' ? items : items.filter((child) => {
        const group = child.groups.find(item => item === type);
        return !!group;
      }),
      activeGroup: type,
    });
  }

  orderChildren(order) {
    const children = this.state.children.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return order === 'asc' ? -1 : 1;
      }

      if (nameA > nameB) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });

    this.setState({ children, order });
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">Media - <span className="fw-semi-bold">Images</span>
        </h1>

        <div className={s.galleryControls}>
          <ButtonGroup id="shuffle-buttons">
            <Button color="default" onClick={() => this.filterChildren('all')} active={this.state.activeGroup === 'all'}>All</Button>
            <Button color="default" onClick={() => this.filterChildren('nature')} active={this.state.activeGroup === 'nature'}>Nature</Button>
            <Button color="default" onClick={() => this.filterChildren('people')} active={this.state.activeGroup === 'people'}>People</Button>
            <Button color="default" onClick={() => this.filterChildren('space')} active={this.state.activeGroup === 'space'}>Space</Button>
          </ButtonGroup>
          <ButtonGroup id="order-buttons">
            <Button color="default" onClick={() => this.orderChildren('asc')} active={this.state.order === 'asc'}><i className="fa fa-sort-numeric-asc" /></Button>
            <Button color="default" onClick={() => this.orderChildren('desc')} active={this.state.order === 'desc'}><i className="fa fa-sort-numeric-desc" /></Button>
          </ButtonGroup>
        </div>
        <div className={s.gallery}>
          {this.state.children.map((item, index) => {
            const key = item.name + index;
            return (
              <div key={key} className={`${s.picture} card`}>
                <a href={item.src} onClick={e => this.openLightbox(index, e)}><img className="figure-img" src={item.src} alt="..." /></a>
                <div className={s.description}>
                  <h6 className="mt-0 mb-xs">{item.name}</h6>
                  <ul className="post-links">
                    <li><button className="btn-link">{item.date}</button></li>
                    <li><button className="btn-link"><span className="text-danger"><i className={`fa ${item.like ? 'fa-heart' : 'fa-heart-o'}`} /> Like</span></button></li>
                    <li><button className="btn-link">Details</button></li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.state.children}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
          onClickImage={this.handleClickImage}
          onClickThumbnail={this.gotoImage}
          backdropClosesModal
          enableKeyboardInput
          theme={this.state.theme}
        />
      </div>);
  }

}

export default Gallery;
