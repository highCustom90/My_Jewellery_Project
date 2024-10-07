import { Email, LocalShipping } from '@mui/icons-material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CallIcon from '@mui/icons-material/Call';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import StarIcon from '@mui/icons-material/Star';
import { Avatar, Box, Button, Slider, Stack, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from "react-hot-toast";
import { Slider1 } from '../sliders/Slider1';
import { caratImage, multipleProductImage, otherEngagementRingImage, recentlyViewedImage } from '../utils/AllImagesProvider';
import { useParams } from 'react-router-dom';

const SingleProductDetailShow = () => {

  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }
  const [value, setValue] = useState({ value: 0, size: 0.5 });

  const [skinTone, setSkinTone] = useState(100); // Default value of the slider

  const handleChange = (event, sec) => {
    console.log(event.target.value)
    const newValue = parseFloat(event.target.value); // Get the new slider value

    setValue((prevState) => {
      if (newValue > prevState.value) {
        // If the new value is greater than the previous value, increment both `value` and `size`
        return {
          value: prevState.value + 1,
          size: prevState.size + 0.5,
        };
      } else if (newValue < prevState.value) {
        // If the new value is smaller than the previous value, decrement both `value` and `size`
        return {
          value: prevState.value - 1,
          size: prevState.size - 0.5,
        };
      }
      return prevState; // No change if values are equal
    });
  };


  const [marquise, setMarquise] = useState([]);
  const [diamondSize, setDiamondSize] = useState([]);

  // my tp work
  const { shape } = useParams()

  async function fetchFromDb(value, sizeValue) {
    let data = await axios.get("http://localhost:5050/rings");
    const shapes = data.data;
    if (shapes[shape]) {
      setMarquise(shapes[shape].gold);
      setDiamondSize(shapes[shape].Goldsizes)
      for (let i in shapes[shape]) {
        if (value === i) {
          setMarquise(shapes[shape][value]);
          setDiamondSize(shapes[shape][sizeValue]);
        }
      }
    }
  }
  useEffect(() => {
    fetchFromDb();
  }, [])

  return (
    <>
      <div className='flex lg:w-[80%] mdi:w-[80%] m-auto sm:flex-col lg:flex-row overflow-hidden'>
        <div className='lg:w-[100%]'>
          <div className='flex lg:w-[100%] flex-wrap lg:justify-between sm:justify-around items-center'>
            {/* here we use multipleProdcutImage array */}
            {marquise.map((url, index) => (
              <Box className="mb-5 lg:w-[350px] lg:h-[350px] sm:w-[150px] sm:h-[150px]" key={index}>
                <img
                  className='h-full w-full relative'
                  src={index == 0 ? diamondSize[value.value] : url}
                  alt="something went wrong"
                  style={index === 3 ? { filter: `brightness(${skinTone}%)` } : {}}
                />

                {index === 3 &&
                  <Box sx={{ height: "150px" }} className="relative">
                    <Slider
                      sx={{
                        '& .MuiSlider-thumb': {
                          color: 'primary.main', // Customize thumb color
                        },
                      }}
                      className='absolute left-80 bottom-60 z-50'
                      orientation="vertical"
                      value={skinTone}
                      onChange={(e) => setSkinTone(e.target.value)}
                      aria-label="Skin Tone"
                      min={45}
                      max={100}
                      valueLabelDisplay="auto"
                      onKeyDown={preventHorizontalKeyboardNavigation}
                    />
                    <img
                      src={multipleProductImage[index].handring}
                      alt="something went wrong"
                      className='absolute bottom-36 left-26'
                      height={"373px"}
                      width={"373px"}
                    />
                  </Box>
                }
              </Box>
            ))}
          </div>
        </div>

        <div className='lg:w-[100%]'>

          <div className="pr-content lg:p-8 sm:p-2">
            <Typography variant='h5'>Petite Cometa Three Stone Diamond <br /> Engagement Ring</Typography>

            <Stack direction={"row"} className='mt-3 mb-3'>
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon fontSize="" key={index} />
              ))}

            </Stack>

            <Typography className='text-gray-500'>
              Elegant and chic, this three stone ring features two kite- <br /> shaped diamond accents alongside a center gemstone <br /> cradled by lustrous claw prongs. The sleek, sophisticated <br /> band gently tapers down into a low dome for increased <br /> comfort.
            </Typography>

            {/* here we provide slider for diamond shape */}
            <div className='mt-5'>
              <span>View The Diamond Shape: Any name</span>
              <Typography>here we provide slider for diamond shape</Typography>
            </div>

            {/* here diamond shape color */}
            <div>
              <Typography><b>Metal</b>: color name</Typography>
              <Stack direction={"row"} justifyContent={"space-around"} className='lg:w-[30%] mt-2'>
                <Box height={"30px"} width={"30px"} className="rounded-full cursor-pointer overflow-hidden bg-rose-200" onClick={() => fetchFromDb("rose", "Rosesizes")}>
                  <img src="src\assets\diamondcolor\Rose_Gold.png" className='h-full w-full' alt="" />
                </Box>
                <Box height={"30px"} width={"30px"} className="rounded-full cursor-pointer overflow-hidden bg-slate-400" onClick={() => fetchFromDb("white", "Whitesizes")}>
                  <img src="src\assets\diamondcolor\White_Gold.png" className='h-full w-full' alt="" />
                </Box>
                <Box height={"30px"} width={"30px"} className="rounded-full cursor-pointer overflow-hidden bg-orange-300" onClick={() => fetchFromDb("gold", "Goldsizes")}>
                  <img src="src\assets\diamondcolor\Yellow_Gold.png" className='h-full w-full' alt="" />
                </Box>
              </Stack>
            </div>

            {/* here is size of diamonds */}
            {/* <div className='mt-5 mb-2'>
              <Typography>Setting Carat Weight:1/15 ct. tw.</Typography>
              <Stack direction={"row"} justifyContent={"space-around"} alignItems={"center"} className='lg:w-[35%] mt-2'>
                <Box height={"35px"} width={"35px"} className="rounded-full cursor-pointer border border-custom-green text-center pt-1">1/15</Box>
                <Box height={"35px"} width={"35px"} className="rounded-full cursor-pointer border border-custom-green text-center pt-1">1/10</Box>
                <Box height={"35px"} width={"35px"} className="rounded-full cursor-pointer border border-custom-green text-center pt-1">1/3</Box>
              </Stack>
            </div> */}

            <div className='mt-5 mb-2'>
              <Typography>Diamond Origin: Natural</Typography>
              <Stack direction={"row"} justifyContent={"space-around"} alignItems={"center"} className='lg:w-[50%] mt-2 text-center mb-4'>
                <button className='rounded-full border border-custom-green ps-3 pe-3 pt-2 pb-1'>Mossioniate</button>
                {/* <button className='rounded-full border border-custom-green ps-3 pe-3 pt-2 pb-1'>Nature</button> */}
                <button className='rounded-full border border-custom-green ps-3 pe-3 pt-2 pb-1'>Lab Grown</button>
              </Stack>
              <Box sx={{ width: "200px" }} className="sm:m-auto lg:m-0">
                <Slider
                  value={value.size}
                  min={0.50}
                  step={0.50}
                  max={3}
                  className='w-[50%]'
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  aria-labelledby="non-linear-slider"
                // valueLabelFormat={(x) => x.toFixed(2)}
                />
                <Typography>Select Carat: Carat {value.size}</Typography>
              </Box>
            </div>

            <div className='mt-8 lg:w-[100%]'>
              <Typography variant='h6' className='sm:text-center lg:text-left'>$1,290 <span>(setting only)</span></Typography>
              <Box mt={"15px"} className="flex flex-wrap sm:justify-center lg:justify-start mdi:flex-col lg:flex-row mdi:items-center lg:items-start" >
                <img src="https://image.brilliantearth.com/media/promotion/PRODUCT_IMAGE_300xx300_DiaStuds_2023_1708718038_840934.jpg" className='h-[70px] w-[70px] me-[10px]' alt="" />
                <div>
                  <Typography variant="h6" className='sm:text-center lg:text-left mdi:text-left'>END SOON!</Typography>

                  <Typography fontSize={"12px"} className='text-gray-500 sm:text-center lg:text-left mdi:text-left'>
                    Lab Studs (1/4 ct. tw.) With Purchase Over <br /> $1,000. Lab Studs & Tennis Bracelet With <br /> Purchase Over $3,000. <br />
                    Use Code SPARKLE in Cart.
                  </Typography>

                  {/* diamond size select box */}
                  <div className='flex flex-col items-center sm:justify-around mt-[20px] mdi:justify-start'>
                    <select className="select select-info w-full max-w-xs text-black">
                      <option disabled>Select Size</option>
                      <option value={"1"}>1</option>
                      <option value={"2"}>2</option>
                      <option value={"3"}>3</option>
                    </select>
                    <div className='flex items-center sm:justify-around mt-[20px] mdi:justify-start'>
                      <button className='bg-custom-green text-white w-[250px] h-[37px]' style={{ padding: "8px 18px" }}>ADD TO BAG</button>
                      <FavoriteBorderIcon className='ms-3' />
                    </div>
                  </div>

                  {/* here is all contact info  */}
                  <Stack direction={"row"} className='mt-[20px] bg-solid-gray w-[378px] h-[82px]' padding={"30px 10px"} justifyContent={"space-between"}>
                    <div className='flex items-center justify-between'>
                      <MarkEmailUnreadIcon />
                      {/* <span className='text-gray-500'> */}
                      <BasicModal />
                      {/* </span> */}
                    </div>
                    <Typography className='flex items-center justify-between'>
                      <Email />
                      <span className='text-gray-500'>
                        Email
                      </span>
                    </Typography>
                    <Typography className='flex items-center justify-between'>
                      <CallIcon />
                      <span className='text-gray-500'>
                        7845475158
                      </span>
                    </Typography>
                  </Stack>

                  <hr className='mt-[20px] mb-[20px]' />

                  <Box>
                    <Typography className='flex items-center'>
                      <LocalShipping className='me-8' />
                      <span className='text-gray-500 text-sm'>Free Shipping, Free 30 Day Returns</span>
                    </Typography>

                    <Typography className='flex items-center'>
                      <CalendarTodayIcon className='me-8' />
                      <span className='text-gray-500 text-sm'>Order now and your order ships by Thu, Oct 10, <br /> depending on center diamond.</span>
                    </Typography>
                  </Box>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:w-[80%] mdi:w-[80%] m-auto mt-20'>
        <Typography variant='h6'>Other Engagement Rings You'll Love</Typography>
        <Slider1 data={otherEngagementRingImage} />
      </div>

      <div className='lg:w-[80%] mdi:w-[80%] m-auto mt-20'>
        <Typography variant='h6'>Recently Viewed</Typography>
        <Slider1 data={recentlyViewedImage} />
      </div>
    </>
  )

}



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  async function handleLogin() {
    const obj = { email, name };
    try {
      const postData = await axios.post("http://localhost:4500/login", obj);
      toast.success("sucessfully posted");
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Something went wrong during login:", error);
    } finally {
      setEmail("");
      setName("");
    }
  }


  return (
    <div>
      <Button onClick={handleOpen} color='black'>Drop hint</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
          {/* <div className='pt-[10px]'> */}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Drop a Hint
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Love this design? Share a little hint.
          </Typography>
          {/* </div> */}
          <Stack className='mt-8 flex items-center justify-between text-center'>
            <Box className="h-[90px] w-[90px]">
              <Avatar sx={{ height: "100%", width: "100%" }} variant="square" src={multipleProductImage[0].realring}>
              </Avatar>
            </Box>
            <Typography>18K Yellow Gold Secret Garden Diamond Ring (1/2 ct. tw.)</Typography>
          </Stack>

          <div className='mt-8'>
            <input
              type="text"
              value={name}
              placeholder="Type here your name"
              className="input input-bordered input-sm w-full max-w-xs" onChange={(e) => setName(e.target.value)} />

            <input
              type="text"
              value={email}
              placeholder="Type here your email"
              className="input input-bordered input-sm w-full max-w-xs mt-8" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <button className="btn bg-custom-green text-white w-full mt-8" onClick={handleLogin}>Send</button>
        </Box>
      </Modal>
    </div >
  );
}

export default SingleProductDetailShow;