import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffe = () => {
    const coffee = useLoaderData();

    const  {_id, name, quantity, supplier, taste, category, details, photo} = coffee;
    
    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(updateCoffee);

        // Send data to the seever
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'Coffe Update Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }


    return (
        <div>
            <div className="p-10 bg-[#F4F3F0] w-3/5 m-auto mt-11">
            <h2 className="text-center text-4xl font-bold pb-3">Update Coffee : {name}</h2>
            <p className="text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleUpdateCoffee}>
                {/* form name quantity */}
                <div className="flex mt-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee name" className="input input-bordered w-full" defaultValue={name}/>
                        </label>
                    </div>
                    
                    <div className="form-control ms-5 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" defaultValue={quantity}/>
                        </label>
                    </div>
                </div>

                {/* Supplier taste  */}
                <div className="flex mt-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier name" className="input input-bordered w-full" defaultValue={supplier}/>
                        </label>
                    </div>
                    
                    <div className="form-control ms-5 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" defaultValue={taste}/>
                        </label>
                    </div>
                </div>

                {/* Category Details  */}
                <div className="flex mt-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" defaultValue={category}/>
                        </label>
                    </div>
                    
                    <div className="form-control ms-5 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" defaultValue={details} />
                        </label>
                    </div>
                </div>
                 {/* Category Details  */}
                <div className="flex mt-3">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" defaultValue={photo} />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Coffee"  className="btn btn-active btn-success w-full mt-3"/>
            </form>
        </div>
        </div>
    );
};

export default UpdateCoffe;