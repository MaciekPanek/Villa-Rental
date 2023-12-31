import { useEffect, useState } from 'react';
import { useUpdateUser } from '../../hooks/useUpdateUser';
import { useUser } from '../../hooks/useUser';
import FormRow from '../../ui/FormRow';

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
    isLoading,
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (!isLoading && currentFullName) {
      // Initialize the input values when user data is available
      setFullName(currentFullName);
    }
  }, [isLoading, currentFullName]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <div className=' flex flex-col justify-center items-center w-3/4 '>
      <h3 className='text-center italic md:text-[40px] text-[25px] text-neutral-500 dark:text-neutral-300 py-3 pt-10'>
        Update user!
      </h3>
      <form
        onSubmit={handleSubmit}
        className='border border-neutral-300 flex flex-col rounded-xl bg-neutral-200 dark:bg-neutral-600 w-full px-5 '>
        <FormRow>
          <input value={email} disabled className='inputStyle dark:bg-neutral-400 bg-neutral-100 cursor-not-allowed ' />
        </FormRow>
        <FormRow>
          <input
            type='text'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            id='fullNameUpdate'
            placeholder='Full name'
            className='inputStyle'
            disabled={isUpdating}
          />
        </FormRow>
        <FormRow>
          <input
            id='avatar'
            type='file'
            className=' mb-3 px-1 w-full file:rounded-full file:bg-neutral-200 file:border-solid file:border-neutral-400  file:text-neutral-400  text-neutral-500 sm:file:px-6   sm:file:py-2 file:mr-5 file:hover:cursor-pointer  '
            accept='image/*'
            onChange={(e) => setAvatar(e.target.files[0])}
            disabled={isUpdating}
          />
        </FormRow>
        <FormRow className={'justify-end gap-5 md:gap-5'}>
          <button type='reset' className='buttonStyle ' onClick={handleCancel}>
            Cancel
          </button>
          <button className='buttonStyle'>Update account</button>
        </FormRow>
      </form>
    </div>
  );
}

export default UpdateUserDataForm;
