import Products from "@/components/Products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export async function getData() {
  interface Options {
    url: string;
    params: {
      query: string;
      page: string;
      country: string;
      sort_by: string;
      product_condition: string;
      is_prime: string;
    };
    headers: {
      "x-rapidapi-key": string;
      "x-rapidapi-host": string;
    };
  }
  let query = "Phone";
  const options: Options = {
    url: "https://real-time-amazon-data.p.rapidapi.com/search",
    params: {
      query: query,
      page: "1",
      country: "US",
      sort_by: "RELEVANCE",
      product_condition: "ALL",
      is_prime: "false",
    },
    headers: {
      "x-rapidapi-key": "f5a38a9cd0mshfa3154c6efaa96dp1d8e85jsn0312c0e646e9",
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  };

  const queryParams = new URLSearchParams(options.params).toString();
  const urlWithParams = `${options.url}?${queryParams}`;

  try {
    const res = await fetch(urlWithParams, {
      method: "GET",
      headers: options.headers,
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log("API response:", data);
    return data.data.products;
  } catch (error) {
    console.error("Error while getting products:", error);
  }
}

async function page() {
  const data = await getData();
  return (
    <>
      {" "}
      <Header />
      <Products data={data} />;
      <Footer />
    </>
  );
}

export default page;
