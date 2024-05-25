import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react'

const AddTransformationTypePage = async ({params: {type}}:SearchParamProps) => {

  const transformation = transformationTypes[type];
  const {userId} = auth();
  console.log("userId>>>>", userId)

  if(!userId) redirect('/sing-in');

  const user = await getUserById(userId);

  return (
    <>
    <Header 
      title={transformation.title}
      subtitle={transformation.subTitle}
      />
    <section className="mt-10">
      <TransformationForm 
        action="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </section>
    </>
  )
}

export default AddTransformationTypePage