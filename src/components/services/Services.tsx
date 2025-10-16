import React from 'react';
import '../services/services.scss';

interface DataInterface {
  id: number;
  title: string;
  description: string;
}

const text = `
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quibusdam 
aspernatur officia in laudantium totam explicabo, reprehenderit, enim illo optio 
sit perspiciatis voluptates quos. Assumenda error, mollitia delectus quaerat 
repudiandae pariatur consequatur accusantium enim explicabo dolorem et in minima
quisquam natus accusamus voluptate ratione nostrum, totam aperiam ex aut voluptatibus
At vitae architecto accusamus provident nulla eligendi laborum laboriosam ex neque numquam 
`;

const Data: DataInterface[] = [
  {
    id: 1,
    title: 'Lorem With Lorem Imp Ipsum Dolor comet But not Inet!',
    description: text,
  },
  {
    id: 2,
    title: 'Lorem With Lorem Imp Ipsum Dolor come Inet!',
    description: text,
  },
  {
    id: 3,
    title: 'Lorem With Lorem Imp Ipsum Dolor But not Inet!',
    description: text,
  },
];

const Services: React.FC = () => {
  return (
    <section className="services-wrapper" id="services">
      <div className="services">
        <div className="top-title">
          <h2>
            Our Success Story In <strong>Azerbaijan</strong>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat
            nesciunt non, numquam rem asperiores nihil quae inventore pariatur minima?
          </p>
        </div>

        <div className="grid-data">
          {Data.map(data => (
            <div key={data.id} className="service-item">
              <div className="top-texts">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
