import PropTypes from 'prop-types';

const Hero = ({
  title = "Become a React Dev",
  subtitle = "Find the React job that fits your skills and needs",
}) => {
  return (
    <section className="py-20 mb-4 bg-indigo-700">
      <div className="flex flex-col items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Hero;
