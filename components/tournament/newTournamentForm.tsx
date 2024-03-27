import React, { useState, useEffect, useMemo } from "react";
import style from "@/styles/scss/app.module.scss";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
// import CKeditor from "@/components/ckEditor";

import InputSlider from "react-input-slider";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          display: "block",
          width: "100%",
          height: "2rem",
          fontSize: "0.875",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "400",
          color: "rgba(255, 255, 255, 0.8)",
          background: "#fff",
          textAlign: "left",
          padding: "0.6rem 1.4rem",
          "::placeholder": {
            color: "rgba(255, 255, 255, 0.4)",
            fontSize: "0.875",
          },
        },
        invalid: {
          color: "#e71939",
        },
      },
    }),
    []
  );

  return options;
};
interface StaffData {
  contact: string;
  responsibility: string;
}

interface StaffState {
  staff: StaffData[];
}
interface MatchDetails {
  schedule_date: string;
  schedule_time: string;
  schedule_breaks: number;
  venue_availability: string;
}
interface TournamentDetails {
  title: string;
  category_id: string;
  type: string;
  start_date: string;
  end_date: string;
  open_date: string;
  registration_dead_line: string;
  event_type: string;
  country_id: string;
  city: string;
  postal_code: string;
  address: string;
  number_of_teams: string;
  format: string;
  entry_fee: string;
  prize_distribution: string;
  level: string;
  overview: string;
  rules: string;
  code_of_conduct: string;
  age: string;
  equipment_requirements: string;
  schedule_date: string;
  schedule_time: string;
  schedule_breaks: number;
  venue_availability: string;
  second_match_date: string;
  second_match_time: string;
  second_match_breaks: number;
  second_venue_availability: string;
  third_match_date: string;
  third_match_time: string;
  third_match_breaks: number;
  third_venue_availability: string;
  fourth_match_date: string;
  fourth_match_time: string;
  fourth_match_breaks: number;
  fourth_venue_availability: string;
  contact_information: string;
  roles_and_responsibilities: string;
  sponsor_information: string;
  bank_information: string;
  logos: any[];
  banners: any[];
  documents: any[];
  sponsors: string;
  tournament_logo: string;
  number_of_matches: number;
  matches: MatchDetails[];
}

const NewTournamentForm = () => {
  const findClosestNumber = (number: number): number => {
    const series: number[] = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

    // Check if the number is in the series
    if (series.includes(number)) {
      return Math.floor(number / 2);
    }

    // Find the closest smaller number in the series
    let closestSmaller = 1;
    for (const value of series) {
      if (value < number) {
        closestSmaller = value;
      } else {
        break;
      }
    }

    // Calculate the result
    const result = number - closestSmaller;
    if (result > 0) {
      return Math.floor(result / 2);
    }
    return result;
  };
  const [staffData, setStaffData] = useState<StaffState>({
    staff: [{ contact: "", responsibility: "" }],
  });
  const handleStaffInputChange = (
    index: number,
    field: keyof (typeof staffData.staff)[0],
    value: string
  ) => {
    const updatedStaff = [...staffData.staff];
    updatedStaff[index][field] = value;
    setStaffData({ ...staffData, staff: updatedStaff });
  };
  const handleAddStaff = () => {
    setStaffData({
      ...staffData,
      staff: [...staffData.staff, { contact: "", responsibility: "" }],
    });
  };
  const handleRemoveStaff = (index: number) => {
    const updatedStaff = staffData.staff.filter((_, i) => i !== index);
    setStaffData({ ...staffData, staff: updatedStaff });
  };
  const options = useOptions();
  // const stripe = useStripe();
  // const elements = useElements();

  const router = useRouter();
  const [tournamentData, setTournamentData] = useState<any>([]);
  const [errors, setErrors] = useState<any>({});
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldset, setFieldset] = useState("tournament_details");
  const logos = useState<any>([]);
  const banners = useState<any>([]);
  const documents = useState<any>([]);
  const formData = new FormData();
  const [overview, setOverview] = useState<string>("");
  const [rules, setRules] = useState<string>("");
  const [codeOfConduct, setCodeOfConduct] = useState<string>("");
  const [sponsorInformation, setSponsorInformation] = useState<string>("");
  const [cardError, setCardError] = useState("");
  const [tournamentId, setTournamentId] = useState("");
  const [numberOfTeams, setNumberOfTeams] = useState(0);
  const [tournamentDetails, setTournamentDetails] = useState<TournamentDetails>(
    {
      title: "",
      category_id: "",
      type: "",
      start_date: "",
      end_date: "",
      open_date: "",
      registration_dead_line: "",
      event_type: "",
      country_id: "",
      city: "",
      postal_code: "",
      address: "",
      number_of_teams: "",
      format: "",
      entry_fee: "",
      prize_distribution: "",
      level: "",
      overview: "",
      rules: "",
      code_of_conduct: "",
      age: "",
      equipment_requirements: "",
      schedule_date: "",
      schedule_time: "00:00",
      schedule_breaks: 0,
      venue_availability: "",
      second_match_date: "",
      second_match_time: "00:00",
      second_match_breaks: 0,
      second_venue_availability: "",
      third_match_date: "",
      third_match_time: "00:00",
      third_match_breaks: 0,
      third_venue_availability: "",
      fourth_match_date: "",
      fourth_match_time: "00:00",
      fourth_match_breaks: 0,
      fourth_venue_availability: "",
      contact_information: "",
      roles_and_responsibilities: "",
      sponsor_information: "",
      bank_information: "",
      logos: [] as any,
      banners: [] as any,
      documents: [] as any,
      sponsors: "",
      tournament_logo: "",
      number_of_matches: 0,
      matches: [],
    }
  );
  useEffect(() => {
    fetchTournamentData();
  }, []);

  const fetchTournamentData = async () => {
    try {
      const res = await axios.get(`${process.env.API_URL}/tournament-details`);
      if (res.status === 200) {
        setTournamentData(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleNumberOfTeamsChange = (e: any) => {
    const Number = tournamentData.numberOfTeams.find(
      (item: any) => item.id == e.target.value
    );
    setNumberOfTeams(Number.number_of_teams);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "number_of_teams") {
      if (value > 0) {
        const number_of_matches = findClosestNumber(value);
        setTournamentDetails({
          ...tournamentDetails,
          [name]: value,
          number_of_matches: number_of_matches,
          matches: Array.from({ length: number_of_matches }, () => ({
            schedule_date: "",
            schedule_time: "00:00",
            schedule_breaks: 0,
            venue_availability: "",
          })),
        });
      } else {
        setTournamentDetails({ ...tournamentDetails, [name]: value });
      }
    } else {
      setTournamentDetails({ ...tournamentDetails, [name]: value });
    }
  };
  const handleMatchesChange = (
    matchIndex: number,
    field: string,
    value: string
  ) => {
    setTournamentDetails((prevState) => {
      const updatedMatches = [...prevState.matches];
      updatedMatches[matchIndex] = {
        ...updatedMatches[matchIndex],
        [field]: value,
      };
      return {
        ...prevState,
        matches: updatedMatches,
      };
    });
  };
  const handleNumericalSliderChange = (value: any, name: any) => {
    setTournamentDetails({ ...tournamentDetails, [name]: value });
  };

  const handleUploadMultipleLogo = async (e: any) => {
    for (let i = 0; i < e.target.files.length; i++) {
      formData.append("logos[]", e.target.files[i]);
    }
  };
  const handleUploadMultipleDocuments = async (e: any) => {
    const files = e.target.files;
    const documents = [];

    for (let i = 0; i < files.length; i++) {
      documents.push(files[i]);
      formData.append("documents[]", files[i]);
    }

    setTournamentDetails({ ...tournamentDetails, documents: documents });
  };

  const handleUploadMultipleBanners = async (e: any) => {
    const banners = [];
    const files = e.target.files;
    for (let i = 0; i < e.target.files.length; i++) {
      banners.push(files[i]);
      formData.append("banners[]", e.target.files[i]);
    }
    setTournamentDetails({ ...tournamentDetails, banners: banners });
  };
  const handleUploadLogo = async (e: any) => {
    console.log(e.target.files[0]);
    // for (let i = 0; i < e.target.files.length; i++) {
    formData.append("tournament_logo", e.target.files[0]);
    setTournamentDetails({
      ...tournamentDetails,
      tournament_logo: e.target.files[0],
    });
    // }
  };
  function logFormDataKeys(fd: FormData) {
    const keys = Array.from(fd.keys());
    keys.forEach((key) => console.log(key));
  }

  logFormDataKeys(formData);

  const deleteTouranment = async (tournamentId: any) => {
    try {
      if (tournamentId) {
        const res = await axios.delete(
          `${process.env.API_URL}/tournaments/${tournamentId}`
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (tournamentDetails.bank_information == "") {
      toast.error("Bank information is required");
      return;
    }
    setIsLoading(true);
    formData.append("user_id", Cookies.get("user_id") as string);
    formData.append("title", tournamentDetails.title);
    formData.append("category_id", tournamentDetails.category_id);
    formData.append("type", tournamentDetails.type);
    formData.append("start_date", tournamentDetails.start_date);
    formData.append("open_date", tournamentDetails.open_date);
    formData.append("end_date", tournamentDetails.end_date);
    formData.append(
      "registration_dead_line",
      tournamentDetails.registration_dead_line
    );
    formData.append("event_type", tournamentDetails.event_type);
    formData.append("country_id", tournamentDetails.country_id);
    formData.append("city", tournamentDetails.city);
    formData.append("postal_code", tournamentDetails.postal_code);
    formData.append("address", tournamentDetails.address);
    formData.append("number_of_teams", tournamentDetails.number_of_teams);
    // formData.append("format", tournamentDetails.format);
    formData.append("entry_fee", tournamentDetails.entry_fee);
    // formData.append("prize_distribution", tournamentDetails.prize_distribution);
    formData.append("level", tournamentDetails.level);
    formData.append("overview", tournamentDetails.overview);
    formData.append("rules", tournamentDetails.rules);
    formData.append("code_of_conduct", tournamentDetails.code_of_conduct);
    formData.append(
      "sponsor_information",
      tournamentDetails.sponsor_information
    );
    formData.append("bank_information", tournamentDetails.bank_information);
    formData.append("sponsors", tournamentDetails.sponsors);
    // formData.append('overview', overview);
    // formData.append('rules', rules);
    // formData.append('code_of_conduct', codeOfConduct);
    // formData.append('sponsor_information',sponsorInformation);
    formData.append("age", tournamentDetails.age);
    formData.append(
      "equipment_requirements",
      tournamentDetails.equipment_requirements
    );

    formData.append(
      "contact_information",
      tournamentDetails.contact_information
    );
    formData.append(
      "roles_and_responsibilities",
      tournamentDetails.roles_and_responsibilities
    );
    tournamentDetails?.documents.forEach((file: File) => {
      formData.append("documents[]", file);
    });
    tournamentDetails?.banners.forEach((file: File) => {
      formData.append("banners[]", file);
    });
    formData.append("tournament_logo", tournamentDetails?.tournament_logo);
    formData.append("staff_arr", JSON.stringify(staffData?.staff));
    formData.append("matches", JSON.stringify(tournamentDetails?.matches));
    logFormDataKeys(formData);
    try {
      const res = await axios.post(
        process.env.API_URL + "/tournaments-create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      setIsLoading(false);
      //   logFormDataKeys(formData);
      console.log(res);
      // return;
      if (res.status === 200) {
        // setTournamentId(res.data.tournament_id);
        // submitTournament(res.data.tournament_id);
        toast.success("Record has been inserted successfully.");
        router.push("/tournament-detail/" + res?.data?.tournament_id);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 422) {
          toast.error("Please fill out all the fields");
          setErrorMessage("Please fill out all the fields");
          setErrors(err.response?.data.errors);
        } else if (err.response?.status === 401) {
          toast.error("You are not authorized to perform this action.");
        }
      }
    }
  };
  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const handleFieldSet = (fieldSet: string) => {
    if (fieldSet == "tournament_rules") {
      const runTimeErrors = {
        title: "",
        category_id: "",
        type: "",
        start_date: "",
        open_date: "",
        end_date: "",
        registration_dead_line: "",
        event_type: "",
        country_id: "",
        city: "",
        postal_code: "",
        address: "",
        number_of_teams: "",
        format: "",
        entry_fee: "",
        prize_distribution: "",
        level: "",
      };
      if (tournamentDetails.title == "") {
        runTimeErrors.title = "title is required";
      }
      if (tournamentDetails.category_id == "") {
        runTimeErrors.category_id = "category is required";
      }
      if (tournamentDetails.type == "") {
        runTimeErrors.type = "type is required";
      }
      if (tournamentDetails.start_date == "") {
        runTimeErrors.start_date = "start date is required";
      }
      if (tournamentDetails.open_date == "") {
        runTimeErrors.open_date = "start date is required";
      }
      if (tournamentDetails.end_date == "") {
        runTimeErrors.end_date = "end date is required";
      }
      if (tournamentDetails.registration_dead_line == "") {
        runTimeErrors.registration_dead_line =
          "registration deadline is required";
      }
      if (tournamentDetails.event_type == "") {
        runTimeErrors.event_type = "event type is required";
      }
      if (tournamentDetails.country_id == "") {
        runTimeErrors.country_id = "country is required";
      }
      if (tournamentDetails.city == "") {
        runTimeErrors.city = "city is required";
      }
      if (tournamentDetails.postal_code == "") {
        runTimeErrors.postal_code = "postal code is required";
      }
      if (tournamentDetails.address == "") {
        runTimeErrors.address = "address is required";
      }
      if (tournamentDetails.number_of_teams == "") {
        runTimeErrors.number_of_teams = "number of teams is required";
      }
      // if (tournamentDetails.format == "") {
      //   runTimeErrors.format = "format is required";
      // }
      if (tournamentDetails.entry_fee == "") {
        runTimeErrors.entry_fee = "entry fee is required";
      }
      // if (tournamentDetails.prize_distribution == "") {
      //   runTimeErrors.prize_distribution = "prize distribution is required";
      // }
      if (tournamentDetails.level == "") {
        runTimeErrors.level = "level is required";
      }
      if (
        runTimeErrors.title != "" ||
        runTimeErrors.category_id != "" ||
        runTimeErrors.type != "" ||
        runTimeErrors.start_date != "" ||
        runTimeErrors.open_date != "" ||
        runTimeErrors.end_date != "" ||
        runTimeErrors.registration_dead_line != "" ||
        runTimeErrors.event_type != "" ||
        runTimeErrors.country_id != "" ||
        runTimeErrors.city != "" ||
        runTimeErrors.postal_code != "" ||
        runTimeErrors.address != "" ||
        runTimeErrors.number_of_teams != "" ||
        runTimeErrors.format != "" ||
        runTimeErrors.entry_fee != "" ||
        runTimeErrors.prize_distribution != "" ||
        runTimeErrors.level != ""
      ) {
        setErrorMessage("Please fill out all the fields");
        setErrors(runTimeErrors);
      } else {
        if (
          tournamentDetails.start_date !== null &&
          tournamentDetails.start_date !== undefined &&
          tournamentDetails.end_date !== null &&
          tournamentDetails.end_date !== undefined &&
          tournamentDetails.registration_dead_line !== null &&
          tournamentDetails.registration_dead_line !== undefined
        ) {
          const startDate = new Date(tournamentDetails.start_date);
          const endDate = new Date(tournamentDetails.end_date);
          const open_date = new Date(tournamentDetails.open_date);
          const registrationDeadline = new Date(
            tournamentDetails.registration_dead_line
          );
          if (endDate <= startDate) {
            toast.error("End date must be greater than start date");
            return;
          }

          // Validate registration_deadline should be greater than start_date and less than end_date

          if (open_date > startDate) {
            toast.error("Open Date should be less than start date");
            return;
          }
          if (open_date >= endDate) {
            toast.error("Registration Open Date should be before end date");
            return;
          }
          if (registrationDeadline > startDate) {
            toast.error("Registration deadline should be before start date");
            return;
          }
          if (registrationDeadline < open_date) {
            toast.error("Registration deadline should be after Open date");
            return;
          }
          if (registrationDeadline >= endDate) {
            toast.error("Registration deadline should be before end date");
            return;
          }
        }
        setFieldset(fieldSet);
        setErrorMessage("");
      }
    } else if (fieldSet == "tournament_schedule") {
      const runTimeErrors = {
        overview: "",
        rules: "",
        code_of_conduct: "",
        sponsor_information: "",
        bank_information: "",
      };
      if (tournamentDetails.overview == "") {
        runTimeErrors.overview = "overview is required";
      }
      if (runTimeErrors.overview != "") {
        setErrorMessage("Please fill out all the fields");
        setErrors(runTimeErrors);
      } else {
        setFieldset(fieldSet);
        setErrorMessage("");
      }
    } else if (fieldSet == "tournament_staff") {
      const runTimeErrors = {
        age: "",
        equipment_requirements: "",
        schedule_date: "",
        schedule_time: "",
        schedule_breaks: "",
        venue_availability: "",
        second_match_date: "",
        second_match_time: "",
        second_match_breaks: "",
        second_venue_availability: "",
        third_match_date: "",
        third_match_time: "",
        third_match_breaks: "",
        third_venue_availability: "",
        fourth_match_date: "",
        fourth_match_time: "",
        fourth_match_breaks: "",
        fourth_venue_availability: "",
      };
      if (tournamentDetails.age == "") {
        runTimeErrors.age = "age is required";
      }
      if (tournamentDetails.equipment_requirements == "") {
        runTimeErrors.equipment_requirements =
          "equipment requirements is required";
      }
      if (
        runTimeErrors.age != "" ||
        runTimeErrors.equipment_requirements != "" ||
        runTimeErrors.schedule_date != "" ||
        runTimeErrors.schedule_time != "" ||
        runTimeErrors.schedule_breaks != "" ||
        runTimeErrors.venue_availability != "" ||
        runTimeErrors.second_match_date != "" ||
        runTimeErrors.second_match_time != "" ||
        runTimeErrors.second_match_breaks != "" ||
        runTimeErrors.second_venue_availability != "" ||
        runTimeErrors.third_match_date != "" ||
        runTimeErrors.third_match_time != "" ||
        runTimeErrors.third_match_breaks != "" ||
        runTimeErrors.third_venue_availability != "" ||
        runTimeErrors.fourth_match_date != "" ||
        runTimeErrors.fourth_match_time != "" ||
        runTimeErrors.fourth_venue_availability != ""
      ) {
        setErrorMessage("Please fill out all the fields");
        setErrors(runTimeErrors);
      } else {
        const startDate = new Date(tournamentDetails.start_date);
        const endDate = new Date(tournamentDetails.end_date);

        for (let i = 0; i < tournamentDetails?.matches.length; i++) {
          const match = tournamentDetails?.matches[i];
          const matchDateObj = new Date(match.schedule_date);
          if (matchDateObj !== undefined && matchDateObj !== null) {
            if (matchDateObj < startDate || matchDateObj > endDate) {
              toast.error(
                `Error: Match ${
                  i + 1
                } date should be between start date and end date`
              );
              return;
            }
          }
        }
        setFieldset(fieldSet);
        setErrorMessage("");
      }
    } else if (fieldSet == "tournament_sponsorship") {
      setFieldset(fieldSet);
      setErrorMessage("");
    } else {
      setFieldset(fieldSet);
      setErrorMessage("");
    }
  };
  console.log("number_of_matches", tournamentDetails?.number_of_matches);
  return (
    <>
      <form
        action=""
        method="post"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className={style.tournament_form}
      >
        {/* {errors.address && (
					
					<div className="alert alert-danger">
						<p className="text-danger">this is for testing purpose</p>
						{errors.map((error: any) => (
							<p key={error} className="text-danger">{error}</p>
						))}
					</div>
				)} */}
        {errorMessage && (
          <div className="alert alert-danger">
            <p className="text-danger">{errorMessage}</p>
          </div>
        )}
        {fieldset === "tournament_details" ? (
          <>
            <fieldset className={style.blk}>
              <h5 className="mb-5">Tournament Details</h5>
              <div className="row">
                <div className="col-sm-12">
                  <h6>
                    Tournament Name <sup>*</sup>
                  </h6>
                  <div className={style.form_blk}>
                    <input
                      autoComplete="off"
                      type="text"
                      name="title"
                      id=""
                      className={style.input}
                      placeholder="eg: Lorem ipsum dollar"
                      onChange={handleChange}
                      value={tournamentDetails.title}
                    />
                  </div>
                  <p className="text-danger">{errors?.title}</p>
                </div>
                <div className="col-sm-6">
                  <h6>
                    Tournament Category <sup>*</sup>
                  </h6>
                  <div className={style.form_blk}>
                    {tournamentData.categories && (
                      <select
                        name="category_id"
                        id=""
                        className={style.input}
                        onChange={handleChange}
                      >
                        <option value="">Select Category</option>
                        {tournamentData.categories.map((category: any) => {
                          return (
                            <option
                              value={category.id}
                              selected={
                                tournamentDetails.category_id == category.id
                              }
                              key={category.id}
                            >
                              {category.name}
                            </option>
                          );
                        })}
                      </select>
                    )}
                    <p className="text-danger">{errors?.category_id}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h6>
                    Tournament Type <sup>*</sup>
                  </h6>
                  <div className={style.form_blk}>
                    {tournamentData.tournamentTypes && (
                      <select
                        name="type"
                        id=""
                        className={style.input}
                        onChange={handleChange}
                      >
                        <option value="">Select Type</option>
                        {tournamentData.tournamentTypes.map((type: any) => {
                          return (
                            <option
                              value={type.id}
                              selected={tournamentDetails.type == type.id}
                              key={type.id}
                            >
                              {type.name}
                            </option>
                          );
                        })}
                      </select>
                    )}
                    <p className="text-danger">{errors?.type}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h6>
                    Tournament Start Date <sup>*</sup>
                  </h6>
                  <div className={style.form_blk}>
                    <input
                      autoComplete="off"
                      type="date"
                      name="start_date"
                      id=""
                      className={style.input}
                      placeholder="eg: 04-12-2020"
                      onChange={handleChange}
                      value={tournamentDetails.start_date}
                    />
                    <p className="text-danger">{errors?.start_date}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h6>
                    Tournament End Date <sup>*</sup>
                  </h6>
                  <div className={style.form_blk}>
                    <input
                      autoComplete="off"
                      type="date"
                      name="end_date"
                      id=""
                      className={style.input}
                      placeholder="eg: 04-12-2020"
                      onChange={handleChange}
                      value={tournamentDetails.end_date}
                    />
                    <p className="text-danger">{errors?.end_date}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h6>
                    Participant Registration Open Date <sup>*</sup>
                  </h6>
                  <div className={style.form_blk}>
                    <input
                      autoComplete="off"
                      type="date"
                      name="open_date"
                      id=""
                      className={style.input}
                      placeholder="eg: 04-12-2020"
                      onChange={handleChange}
                      value={tournamentDetails.open_date}
                    />
                    <p className="text-danger">{errors?.open_date}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h6>
                    Registration Deadline <sup>*</sup>
                  </h6>
                  <div className={style.form_blk}>
                    <input
                      autoComplete="off"
                      type="date"
                      name="registration_dead_line"
                      id=""
                      className={style.input}
                      placeholder="eg: 04-12-2020"
                      onChange={handleChange}
                      value={tournamentDetails.registration_dead_line}
                    />
                    <p className="text-danger">{errors?.end_date}</p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <h6>
                    Event Type <sup>*</sup>
                  </h6>
                  <div className={style.form_blk}>
                    <select
                      name="event_type"
                      id=""
                      className={style.input}
                      onChange={handleChange}
                    >
                      <option value="">Select Type</option>

                      {tournamentData.eventTyeps &&
                        tournamentData.eventTyeps.map((eventType: any) => {
                          return (
                            <option
                              value={eventType.id}
                              selected={
                                tournamentDetails.event_type == eventType.id
                              }
                              key={eventType.id}
                            >
                              {eventType.name}
                            </option>
                          );
                        })}
                    </select>
                    <p className="text-danger">{errors?.event_type}</p>
                  </div>
                </div>
                <div className="col-sm-5">
                  <h6>
                    Country <sup>*</sup>
                  </h6>
                  <div className={style.form_blk}>
                    <select
                      name="country_id"
                      id=""
                      className={style.input}
                      onChange={handleChange}
                    >
                      <option value="">Select Country</option>
                      {tournamentData.countries &&
                        tournamentData.countries.map((country: any) => {
                          return (
                            <option
                              value={country.id}
                              selected={
                                tournamentDetails.country_id == country.id
                              }
                              key={country.id}
                            >
                              {country.name}
                            </option>
                          );
                        })}
                    </select>
                    <p className="text-danger">{errors?.country_id}</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <h6>
                    City <sup>*</sup>
                  </h6>
                  <div className={style.form_blk}>
                    <input
                      autoComplete="off"
                      type="text"
                      name="city"
                      id="city"
                      className={style.input}
                      placeholder="eg: California"
                      onChange={handleChange}
                      value={tournamentDetails.city}
                    />
                    <p className="text-danger">{errors?.city}</p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <h6>
                    Postal code <sup>*</sup>
                  </h6>
                  <div className={style.form_blk}>
                    <input
                      autoComplete="off"
                      type="text"
                      name="postal_code"
                      id="zip_code"
                      className={style.input}
                      placeholder="eg: BL0 0WY"
                      onChange={handleChange}
                      value={tournamentDetails.postal_code}
                    />
                    <p className="text-danger">{errors?.postal_code}</p>
                  </div>
                </div>
                <div className="col-sm-12">
                  <h6>
                    Address <sup>*</sup>
                  </h6>
                  <div className={style.form_blk}>
                    <input
                      autoComplete="off"
                      type="text"
                      name="address"
                      id="address"
                      className={style.input}
                      placeholder="eg: 123 Main Street, California"
                      onChange={handleChange}
                      value={tournamentDetails.address}
                    />
                    <p className="text-danger">{errors?.postal_code}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h6>
                    Number of Teams <sup>*</sup>
                  </h6>
                  <div className={style.form_blk}>
                    <input
                      autoComplete="off"
                      type="number"
                      name="number_of_teams"
                      id="number_of_teams"
                      className={style.input}
                      placeholder="eg: 1,2,3 etc"
                      onChange={handleChange}
                      value={tournamentDetails.number_of_teams}
                    />
                    {/* <select
                      name="number_of_teams"
                      id=""
                      className={style.input}
                      onChange={(e) => {
                        handleChange(e);
                        handleNumberOfTeamsChange(e);
                      }}
                    >
                      <option value="">Select Number</option>
                      {tournamentData.numberOfTeams &&
                        tournamentData.numberOfTeams.map(
                          (numberOfTeam: any) => {
                            return (
                              <option
                                value={numberOfTeam.id}
                                selected={
                                  tournamentDetails.number_of_teams ==
                                  numberOfTeam.id
                                }
                                key={numberOfTeam.id}
                              >
                                {numberOfTeam.number_of_teams}
                              </option>
                            );
                          }
                        )}
                    </select> */}
                    <p className="text-danger">{errors?.number_of_teams}</p>
                  </div>
                </div>

                <div className="col-sm-4">
                  <h6>
                    Entry Fee <sup>*</sup>
                  </h6>
                  <div className={style.form_blk}>
                    <input
                      autoComplete="off"
                      type="text"
                      name="entry_fee"
                      id=""
                      className={style.input}
                      placeholder="eg: 100"
                      onChange={handleChange}
                      value={tournamentDetails.entry_fee}
                    />
                    <p className="text-danger">{errors?.entry_fee}</p>
                  </div>
                </div>

                <div className="col-sm-4">
                  <h6>
                    Tournament Level <sup>*</sup>
                  </h6>
                  <div className={style.form_blk}>
                    <select
                      name="level"
                      id=""
                      className={style.input}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      {tournamentData.tournamentLevels &&
                        tournamentData.tournamentLevels.map(
                          (tournamentLevel: any) => {
                            return (
                              <option
                                value={tournamentLevel.id}
                                selected={
                                  tournamentDetails.level === tournamentLevel.id
                                }
                                key={tournamentLevel.id}
                              >
                                {tournamentLevel.level}
                              </option>
                            );
                          }
                        )}
                    </select>
                    <p className="text-danger">{errors?.level}</p>
                  </div>
                </div>
              </div>
              <div className={`${style.btn_blk} justify-content-center mt-5`}>
                <button
                  type="button"
                  className={style.site_btn}
                  onClick={() => handleFieldSet("tournament_rules")}
                >
                  Continue
                </button>
              </div>
            </fieldset>
          </>
        ) : fieldset === "tournament_rules" ? (
          <>
            <fieldset className={style.blk}>
              <h5 className="mb-5">Rules and Regulations</h5>
              <div className="row">
                <div className="col-sm-12">
                  <h6>Upload Documents </h6>
                  <div className={style.form_blk}>
                    {/* <button type="button" name="" id="" className={style.input}>
											Upload Logos
										</button> */}
                    <input
                      autoComplete="off"
                      type="file"
                      name="documents[]"
                      id=""
                      className={style.input}
                      multiple
                      onChange={handleUploadMultipleDocuments}
                    />
                    <p className="text-danger">{errors?.documents}</p>
                  </div>
                </div>
                <div className="col-sm-12">
                  <h6>
                    Tournament Description <sup>*</sup>
                  </h6>
                  <div className={style.form_blk}>
                    {/* <CKeditor
											name="overview"
											onChange={(editorData: string) => {
												setOverview(editorData);
											}}
											value={tournamentDetails.overview}
											editorLoaded={editorLoaded}
										/> */}
                    <textarea
                      name="overview"
                      id=""
                      cols={30}
                      rows={10}
                      className={style.input}
                      placeholder="eg: Lorem ipsum dollar"
                      onChange={handleChange}
                    >
                      {tournamentDetails.overview}
                    </textarea>
                    <p className="text-danger">{errors?.overview}</p>
                  </div>
                </div>
                <div className="col-sm-12">
                  <h6>Specific rules for the tournament </h6>
                  <div className={style.form_blk}>
                    {/* <CKeditor
											name="rules"
											onChange={(editorData: string) => {
												setRules(editorData);
											}}
											value={tournamentDetails.rules}
											editorLoaded={editorLoaded}
										/> */}
                    <textarea
                      name="rules"
                      id=""
                      cols={30}
                      rows={10}
                      className={style.input}
                      placeholder="eg: Lorem ipsum dollar"
                      onChange={handleChange}
                    ></textarea>
                    <p className="text-danger">{errors?.rules}</p>
                  </div>
                </div>
                <div className="col-sm-12">
                  <h6>Code of Conduct </h6>
                  <div className={style.form_blk}>
                    {/* <CKeditor
											name="code_of_conduct"
											onChange={(editorData: string) => {
												setCodeOfConduct(editorData);
											}}
											value={tournamentDetails.code_of_conduct}
											editorLoaded={editorLoaded}
										/> */}
                    <textarea
                      name="code_of_conduct"
                      id=""
                      cols={30}
                      rows={10}
                      className={style.input}
                      placeholder="eg: Lorem ipsum dollar"
                      onChange={handleChange}
                    >
                      {tournamentDetails.code_of_conduct}
                    </textarea>

                    {/* {JSON.stringify(editorData)} */}
                    <p className="text-danger">{errors?.code_of_conduct}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h6>
                    Age or Skill Level Restrictions <sup>*</sup>
                  </h6>
                  <div className={style.form_blk}>
                    <input
                      autoComplete="off"
                      type="text"
                      name="age"
                      id=""
                      className={style.input}
                      placeholder="eg: 18"
                      onChange={handleChange}
                      value={tournamentDetails.age}
                    />
                    <p className="text-danger">{errors?.age}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h6>
                    Equipment Requirements <sup>*</sup>
                  </h6>
                  <div className={style.form_blk}>
                    <input
                      autoComplete="off"
                      type="text"
                      name="equipment_requirements"
                      id=""
                      className={style.input}
                      placeholder="eg: Lorem, Ipsum, Smit"
                      onChange={handleChange}
                      value={tournamentDetails.equipment_requirements}
                    />
                    <p className="text-danger">
                      {errors?.equipment_requirements}
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${style.btn_blk} justify-content-center mt-5`}>
                <button
                  type="button"
                  className={`${style.site_btn} ${style.simple}`}
                  onClick={() => setFieldset("tournament_details")}
                >
                  Back
                </button>
                <button
                  type="button"
                  className={style.site_btn}
                  onClick={() => handleFieldSet("tournament_schedule")}
                >
                  Continue
                </button>
              </div>
            </fieldset>
          </>
        ) : fieldset === "tournament_schedule" ? (
          <>
            <fieldset className={style.blk}>
              <h5 className="mb-5">Tournament Schedule</h5>
              {tournamentDetails.matches.map((match, index) => (
                <>
                  <h6>Match {index + 1}</h6>
                  <div key={index} className="row">
                    <div className="col-sm-4">
                      <h6>Date</h6>
                      <div className={style.form_blk}>
                        <input
                          type="date"
                          value={match.schedule_date}
                          className={style.input}
                          placeholder="eg: 04-12-2020"
                          onChange={(e) =>
                            handleMatchesChange(
                              index,
                              "schedule_date",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <h6>Time</h6>
                      <div className={style.form_blk}>
                        <input
                          type="time"
                          value={match.schedule_time}
                          className={style.input}
                          placeholder="eg: 16:00"
                          onChange={(e) =>
                            handleMatchesChange(
                              index,
                              "schedule_time",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <h6>Breaks</h6>
                      <div className={style.form_blk}>
                        <input
                          type="number"
                          value={match.schedule_breaks}
                          className={style.input}
                          placeholder="eg: 1,2,3,..."
                          onChange={(e) =>
                            handleMatchesChange(
                              index,
                              "schedule_breaks",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <h6>Venue Availability</h6>
                      <div className={style.form_blk}>
                        <input
                          type="text"
                          value={match.venue_availability}
                          className={style.input}
                          placeholder="eg: 123 Main Street, California"
                          onChange={(e) =>
                            handleMatchesChange(
                              index,
                              "venue_availability",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              ))}

              <div className={`${style.btn_blk} justify-content-center mt-5`}>
                <button
                  type="button"
                  className={`${style.site_btn} ${style.simple}`}
                  onClick={() => setFieldset("tournament_rules")}
                >
                  Back
                </button>
                <button
                  type="button"
                  className={style.site_btn}
                  onClick={() => handleFieldSet("tournament_staff")}
                >
                  Continue
                </button>
              </div>
            </fieldset>
          </>
        ) : fieldset === "tournament_staff" ? (
          <>
            <fieldset className={style.blk}>
              <h5 className="mb-5">Tournament Staff & Volunteers</h5>
              {/* <div className="row">
                <div className="col-sm-6">
                  <h6>Contact Information <sup>*</sup></h6>
                  <div className={style.form_blk}>
                    <input autoComplete="off"
                      type="text"
                      name="contact_information"
                      id=""
                      className={style.input}
                      placeholder="eg: 194349034234"
                      onChange={handleChange}
                      value={tournamentDetails.contact_information}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <h6>Roles and Responsibilities <sup>*</sup></h6>
                  <div className={style.form_blk}>
                    <select
                      name="roles_and_responsibilities"
                      id=""
                      className={style.input}
                      onChange={handleChange}
                    >
                      <option value="Select">Select</option>
                      <option
                        value="Referees"
                        selected={
                          tournamentDetails.roles_and_responsibilities ==
                          "Referees"
                        }
                      >
                        Referees
                      </option>
                      <option
                        value="Scorekeepers"
                        selected={
                          tournamentDetails.roles_and_responsibilities ==
                          "Scorekeepers"
                        }
                      >
                        Scorekeepers
                      </option>
                    </select>
                    <p className="text-danger">
                      {errors?.roles_and_responsibilities}
                    </p>
                  </div>
                </div>
              </div> */}
              <div>
                {staffData.staff.map((staff, index) => (
                  <div key={index} className="row position-relative">
                    <div className="col-sm-6">
                      <h6>
                        Contact Information <sup>*</sup>
                      </h6>
                      <div className={style.form_blk}>
                        <input
                          autoComplete="off"
                          type="text"
                          name="contact_information"
                          className={style.input}
                          placeholder="eg: 194349034234"
                          value={staff.contact}
                          onChange={(e) =>
                            handleStaffInputChange(
                              index,
                              "contact",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h6>
                        Roles and Responsibilities <sup>*</sup>
                      </h6>
                      <div className={style.form_blk}>
                        <select
                          name="roles_and_responsibilities"
                          className={style.input}
                          value={staff.responsibility}
                          onChange={(e) =>
                            handleStaffInputChange(
                              index,
                              "responsibility",
                              e.target.value
                            )
                          }
                        >
                          <option value="Select">Select</option>
                          <option value="Referees">Referees</option>
                          <option value="Scorekeepers">Scorekeepers</option>
                        </select>
                      </div>
                    </div>
                    <div className={style.staff_remove_flex}>
                      <button
                        onClick={() => handleRemoveStaff(index)}
                        className={style.remove_staff}
                      >
                        x
                      </button>
                    </div>
                  </div>
                ))}
                <div className={`${style.btn_blk} justify-content-center mt-5`}>
                  <button
                    onClick={handleAddStaff}
                    className={style.site_btn}
                    type="button"
                  >
                    Add Staff
                  </button>
                </div>
              </div>
              <div></div>
              <div className={`${style.btn_blk} justify-content-center mt-5`}>
                <button
                  type="button"
                  className={`${style.site_btn} ${style.simple}`}
                  onClick={() => setFieldset("tournament_schedule")}
                >
                  Back
                </button>
                <button
                  type="button"
                  className={style.site_btn}
                  onClick={() => handleFieldSet("tournament_sponsorship")}
                >
                  Continue
                </button>
              </div>
            </fieldset>
          </>
        ) : fieldset === "tournament_sponsorship" ? (
          <>
            <fieldset className={style.blk}>
              <h5 className="mb-5">Banners & Sponsors</h5>
              <div className="row">
                <div className="col-sm-12">
                  <h6>Upload Logo</h6>
                  <div className={style.form_blk}>
                    {/* <button type="button" name="" id="" className={style.input}>
											Upload Banners
										</button> */}
                    <input
                      autoComplete="off"
                      type="file"
                      name="tournament_logo"
                      id=""
                      className={style.input}
                      multiple
                      onChange={handleUploadLogo}
                    />
                    <p className="text-danger">{errors?.tournament_logo}</p>
                  </div>
                </div>
                <div className="col-sm-12">
                  <h6>Upload Banners</h6>
                  <div className={style.form_blk}>
                    {/* <button type="button" name="" id="" className={style.input}>
											Upload Banners
										</button> */}
                    <input
                      autoComplete="off"
                      type="file"
                      name="banners[]"
                      id=""
                      className={style.input}
                      multiple
                      onChange={handleUploadMultipleBanners}
                    />
                    <p className="text-danger">{errors?.banners}</p>
                  </div>
                </div>
                <div className="col-sm-12">
                  <h6>
                    Payment intructions <sup>*</sup>
                  </h6>
                  <div className={style.form_blk}>
                    <textarea
                      name="bank_information"
                      id=""
                      rows={5}
                      className={style.input}
                      placeholder="Type something here"
                      onChange={handleChange}
                      value={tournamentDetails.bank_information}
                    ></textarea>
                    <p className="text-danger">{errors?.bank_information}</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <h6>Do you want to add sponsors?</h6>
                  <div className={`${style.form_blk} ${style.form_blk_flex}`}>
                    <div className={style.lbl_btn}>
                      <input
                        type="radio"
                        name="sponsors"
                        id="sponsors"
                        value="no"
                        checked={
                          tournamentDetails.sponsors == "no" ? true : false
                        }
                        onChange={handleChange}
                      />
                      <label htmlFor="no">No</label>
                    </div>
                    <div className={style.lbl_btn}>
                      <input
                        type="radio"
                        name="sponsors"
                        id="sponsors"
                        value="yes"
                        checked={
                          tournamentDetails.sponsors == "yes" ? true : false
                        }
                        onChange={handleChange}
                      />
                      <label htmlFor="yes">Yes</label>
                    </div>
                  </div>
                </div>
                {tournamentDetails?.sponsors == "yes" ? (
                  <>
                    <div className="col-sm-12">
                      <h6>
                        Sponsor Information <sup>*</sup>
                      </h6>
                      <div className={style.form_blk}>
                        <textarea
                          name="sponsor_information"
                          id=""
                          rows={5}
                          className={style.input}
                          placeholder="Type something here"
                          onChange={handleChange}
                          value={tournamentDetails.sponsor_information}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <h6>
                        Upload Logos <sup>*</sup>
                      </h6>
                      <div className={style.form_blk}>
                        <input
                          autoComplete="off"
                          type="file"
                          name="logos[]"
                          id=""
                          className={style.input}
                          multiple
                          onChange={handleUploadMultipleLogo}
                        />
                        <p className="text-danger">{errors?.logos}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
              {/* <h5 className="mb-5 mt-4">
                Payment | Total: {tournamentData.tournament_fee * numberOfTeams}
              </h5>
              <div className="row">
                <div className={style.stripe_payment_form}>
                  <div className="row">
                    <div className="col-12">
                      <h6 className="require">Name on Card <sup>*</sup></h6>
                      <div className={style.form_blk}>
                        <input autoComplete="off"
                          type="text"
                          className={style.input}
                          placeholder="Name on card"
                        />
                        <span className="validation-error"></span>
                      </div>
                    </div>
                    <div className="col-12">
                      <h6 className="require">Card Number <sup>*</sup></h6>
                      <div className={style.form_blk}>
                        <div className={style.input_blk}>
                          <CardNumberElement options={options} />
                          <span>
                            <img src="/images/card.svg" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <h6 className="require">Expiry Date <sup>*</sup></h6>
                      <div className={style.form_blk}>
                        <div className={style.input_blk}>
                          <CardExpiryElement options={options} />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <h6 className="require">CVC <sup>*</sup></h6>
                      <div className={style.form_blk}>
                        <div className={style.input_blk}>
                          <CardCvcElement options={options} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="validation-error" style={{ color: "red" }}>
                    {cardError}
                  </span>
                </div>
              </div> */}
              <div className={`${style.btn_blk} justify-content-center mt-5`}>
                <button
                  type="button"
                  className={`${style.site_btn} ${style.simple}`}
                  onClick={() => setFieldset("tournament_staff")}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className={style.site_btn}
                  disabled={isLoading}
                >
                  {isLoading ? "Please Wait..." : "Create Tournament"}
                </button>
              </div>
            </fieldset>
          </>
        ) : null}
      </form>
    </>
  );
};

export default NewTournamentForm;
