import { useState, useEffect } from "react";
import axios from "axios";
import ModalSearchForm from "../features/admin/ModalSearchForm";
import Modal from "./Modal";

export default function Search() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [Open, setOpen] = useState(false);
  const [itemModal, setItemModal] = useState({
    $: { id: "" },
    name: [{ $: { value: "" } }],
    yearpublished: { $: { value: "" } },
    image: "",
    description: "",
  });

  useEffect(() => {
    const delay = 1000;
    let timeoutId;

    if (search) {
      if (clearTimeout) timeoutId;
    }
    timeoutId = setTimeout(() => {
      fetchData(search);
    }, delay);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [search]);

  const fetchData = async (query) => {
    try {
      if (query === "") return true;
      const res = await axios.get(`/api/search?query=${query}`);
      const { item } = res.data.items;
      if (item) {
        const itemList = Array.isArray(item) ? item : [item];

        setSearchResult(itemList);
      } else {
        setSearchResult([]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const fetchData = async (query) => {
  //   try {
  //     if (query === "") return true;
  //     const res = await axios.get(`/api/search?query=${query}`);
  //     const { item } = res.data.items;
  //     setSearchResult(item);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const hdlInputChange = (e) => {
    setSearch(e.target.value);
    if (search === "") setSearchResult([]);
  };

  const hdlResultClick = (result) => {
    // setSelectResultId(result.$.id);
    setSearch("");
    setSearchResult([]);
    fetchDataById(result.$.id);
    setOpen(true);
  };

  const fetchDataById = async (id) => {
    try {
      const res = await axios.get(`/api/thing?id=${id}`);
      const { item } = res.data.items;
      let nameValue = item.name[0]?.$?.value || item.name?.$?.value;
      // if (Array.isArray(item)) {
      //   nameValue = item.name[0].$.value;
      // } else nameValue = item.name?.$?.value;

      const newItem = {
        ...item,
        name: nameValue,
      };
      setItemModal(newItem);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='relative'>
      <input
        type='text'
        placeholder='Search for...'
        className=' grow border border-grey rounded-full h-10 p-7 min-w-[400px]'
        value={search}
        onChange={hdlInputChange}
      />
      {searchResult.length > 0 ? (
        <div className='absolute w-full p-4 rounded-bl bg-white rounded-br max-h-80 overflow-y-auto z-10 text-lg'>
          <ul>
            {searchResult.map((result, index) => (
              <li key={index} onClick={() => hdlResultClick(result)}>
                {result.name.$.value}{" "}
                {result.yearpublished?.$?.value &&
                  `(${result.yearpublished?.$?.value})`}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <Modal open={Open} onClose={() => setOpen(false)} maxWidth={44}>
        <ModalSearchForm itemModal={itemModal} />
      </Modal>
    </div>
  );
}
